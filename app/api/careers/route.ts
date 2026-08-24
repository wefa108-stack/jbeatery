import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs"; // Ensure Node.js runtime compatibility for Cloudflare Pages / Vercel

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

    // Retrieve RESEND_API_KEY dynamically inside POST handler
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is missing in environment variables.");
      return NextResponse.json(
        { success: false, message: "RESEND_API_KEY environment variable is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    // Convert resume File to attachment (buffer or base64) safely across all runtimes
    const attachments = [];
    if (resume && resume.size > 0) {
      const arrayBuffer = await resume.arrayBuffer();
      let attachmentContent: Buffer | string;
      
      if (typeof Buffer !== "undefined") {
        attachmentContent = Buffer.from(arrayBuffer);
      } else {
        const bytes = new Uint8Array(arrayBuffer);
        let binary = "";
        for (let i = 0; i < bytes.byteLength; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        attachmentContent = btoa(binary);
      }

      attachments.push({
        filename: resume.name,
        content: attachmentContent,
      });
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
  } catch (error: any) {
    console.error("Error sending career application email:", error);
    return NextResponse.json(
      { success: false, message: error?.message || "Failed to send email application" },
      { status: 500 }
    );
  }
}
