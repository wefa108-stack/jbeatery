export async function onRequestPost(context: any) {
  try {
    const req = context.request;
    const env = context.env || {};

    // Retrieve RESEND_API_KEY from Cloudflare Pages env bindings
    const apiKey = env.RESEND_API_KEY || (typeof process !== "undefined" ? process.env.RESEND_API_KEY : "") || "";

    if (!apiKey) {
      console.error("RESEND_API_KEY environment variable is not configured in Cloudflare Pages.");
      return new Response(
        JSON.stringify({
          success: false,
          message: "RESEND_API_KEY is not configured in Cloudflare Pages environment variables.",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const formData = await req.formData();
    const name = formData.get("name")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const position = formData.get("position")?.toString().trim();
    const intro = formData.get("intro")?.toString().trim();
    const resume = formData.get("resume");

    if (!name || !phone || !email || !position || !intro) {
      return new Response(
        JSON.stringify({ success: false, message: "Missing required form fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Convert resume File to base64 attachment if provided
    const attachments = [];
    if (resume && typeof resume === "object" && "size" in resume && (resume as File).size > 0) {
      const fileObj = resume as File;
      const arrayBuffer = await fileObj.arrayBuffer();
      const bytes = new Uint8Array(arrayBuffer);
      let binary = "";
      for (let i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      const base64Content = btoa(binary);

      attachments.push({
        filename: fileObj.name || "resume.pdf",
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
              `Resume Attachment: ${resume && typeof resume === "object" && "name" in resume ? (resume as File).name : "Not attached"}`,
        attachments: attachments.length > 0 ? attachments : undefined,
      }),
    });

    const resData: any = await resendRes.json().catch(() => ({}));

    if (!resendRes.ok) {
      console.error("Resend REST API Error:", resData);
      return new Response(
        JSON.stringify({
          success: false,
          message: resData.message || resData.name || "Failed to deliver email via Resend API",
        }),
        { status: resendRes.status || 500, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        data: resData,
        message: "Application sent successfully to wefa108@gmail.com",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    console.error("Cloudflare Pages Function Exception:", err);
    return new Response(
      JSON.stringify({
        success: false,
        message: err?.message || "Internal error in Cloudflare Pages Function",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
