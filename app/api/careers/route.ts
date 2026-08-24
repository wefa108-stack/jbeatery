import { NextResponse } from "next/server";
import { Resend } from "resend";

// Resend instance initialized securely from environment variable
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: Request) {
  try {
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

    // Convert resume File to attachment buffer if provided
    const attachments = [];
    if (resume && resume.size > 0) {
      const buffer = Buffer.from(await resume.arrayBuffer());
      attachments.push({
        filename: resume.name,
        content: buffer,
      });
    }

    if (!resend) {
      console.warn("RESEND_API_KEY is not configured in environment variables.");
      return NextResponse.json(
        { success: false, message: "Email service not configured" },
        { status: 500 }
      );
    }

    // Send email to wefa108@gmail.com via Resend
    const emailResult = await resend.emails.send({
      from: "JBE Careers <onboarding@resend.dev>",
      to: ["wefa108@gmail.com"],
      replyTo: `${name} <${email}>`,
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
    });

    if (emailResult.error) {
      console.error("Resend Email Delivery Error:", emailResult.error);
      return NextResponse.json(
        { success: false, message: emailResult.error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: emailResult.data,
      message: "Application sent successfully to wefa108@gmail.com",
    });
  } catch (error) {
    console.error("Error sending career application email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email application" },
      { status: 500 }
    );
  }
}
