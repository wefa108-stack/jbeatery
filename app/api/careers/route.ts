import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing in environment variables.");
      return NextResponse.json(
        { success: false, message: "RESEND_API_KEY environment variable is not configured." },
        { status: 500 }
      );
    }

    const formData = await request.formData();
    const name = formData.get("name")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const position = formData.get("position")?.toString().trim();
    const intro = formData.get("intro")?.toString().trim();
    const resume = formData.get("resume") as File | null;

    if (!name || !phone || !email || !position || !intro) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Convert resume File to base64 attachment if provided
    const attachments = [];
    if (resume && resume.size > 0) {
      const arrayBuffer = await resume.arrayBuffer();
      const bytes = new Uint8Array(arrayBuffer);
      let binary = "";
      for (let i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      const base64Content = btoa(binary);

      attachments.push({
        filename: resume.name,
        content: base64Content,
      });
    }

    // Send email to wefa108@gmail.com via Resend REST API
    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "JBE Careers <onboarding@resend.dev>",
        to: ["wefa108@gmail.com"],
        reply_to: `${name} <${email}>`,
        subject: `Job Application: ${position} - ${name}`,
        text: `Job Application Details\n` +
              `----------------------------------------\n` +
              `Name: ${name}\n` +
              `Phone: ${phone}\n` +
              `Email: ${email}\n` +
              `Position: ${position}\n\n` +
              `About Myself:\n${intro}\n\n` +
              `----------------------------------------\n` +
              `Resume Attachment: ${resume && resume.size > 0 ? resume.name : "Not attached"}`,
        attachments: attachments.length > 0 ? attachments : undefined,
      }),
    });

    const resData: any = await resendRes.json().catch(() => ({}));

    if (!resendRes.ok) {
      console.error("Resend API Error:", resData);
      return NextResponse.json(
        { success: false, message: resData.message || resData.name || "Failed to send email via Resend" },
        { status: resendRes.status || 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: resData,
      message: "Application sent successfully to wefa108@gmail.com",
    });
  } catch (error: any) {
    console.error("Error sending career application email:", error);
    return NextResponse.json(
      { success: false, message: error?.message || "Failed to send email application" },
      { status: 500 }
    );
  }
}
