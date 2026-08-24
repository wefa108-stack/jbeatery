/**
 * Cloudflare Worker entry point.
 *
 * Static assets (the `next build` static export in ./out) are served directly by
 * the assets binding; anything that does not match an asset falls through to
 * this fetch handler. /api/careers is the only dynamic route.
 */

interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
  RESEND_API_KEY?: string;
}

const RECIPIENT = "wefa108@gmail.com";
const MAX_RESUME_BYTES = 8 * 1024 * 1024;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });

function toBase64(bytes: Uint8Array): string {
  let binary = "";
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
}

async function handleCareers(request: Request, env: Env): Promise<Response> {
  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not bound to this Worker.");
    return json(
      { success: false, message: "Email service is not configured (missing RESEND_API_KEY)." },
      500
    );
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return json({ success: false, message: "Invalid form submission." }, 400);
  }

  const name = formData.get("name")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const position = formData.get("position")?.toString().trim();
  const intro = formData.get("intro")?.toString().trim();
  const resume = formData.get("resume");

  if (!name || !phone || !email || !position || !intro) {
    return json({ success: false, message: "Missing required form fields." }, 400);
  }

  const attachments: { filename: string; content: string }[] = [];
  if (resume instanceof File && resume.size > 0) {
    if (resume.size > MAX_RESUME_BYTES) {
      return json(
        { success: false, message: "Resume is too large. Please attach a file under 8 MB." },
        400
      );
    }
    attachments.push({
      filename: resume.name || "resume.pdf",
      content: toBase64(new Uint8Array(await resume.arrayBuffer())),
    });
  }

  const resendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "JBE Careers <careers@jbeny.com>",
      to: [RECIPIENT],
      reply_to: `${name} <${email}>`,
      subject: `Job Application: ${position} - ${name}`,
      text:
        `Job Application Details\n` +
        `----------------------------------------\n` +
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Email: ${email}\n` +
        `Position: ${position}\n\n` +
        `About Myself:\n${intro}\n\n` +
        `----------------------------------------\n` +
        `Resume Attachment: ${attachments.length > 0 ? attachments[0].filename : "Not attached"}`,
      attachments: attachments.length > 0 ? attachments : undefined,
    }),
  });

  const resData = (await resendRes.json().catch(() => ({}))) as Record<string, unknown>;

  if (!resendRes.ok) {
    console.error("Resend API error", resendRes.status, resData);
    return json(
      {
        success: false,
        message:
          (resData.message as string) ||
          (resData.name as string) ||
          "Failed to deliver the application email.",
      },
      502
    );
  }

  return json({
    success: true,
    data: resData,
    message: `Application sent successfully to ${RECIPIENT}.`,
  });
}

const worker = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url);

    if (pathname === "/api/careers") {
      if (request.method === "POST") {
        try {
          return await handleCareers(request, env);
        } catch (err) {
          console.error("Unhandled error in /api/careers", err);
          return json(
            { success: false, message: (err as Error)?.message || "Internal error." },
            500
          );
        }
      }
      // Health check so the route can be verified from a browser after deploy.
      if (request.method === "GET") {
        return json({ ok: true, route: "/api/careers", configured: Boolean(env.RESEND_API_KEY) });
      }
      return json({ success: false, message: "Method not allowed." }, 405);
    }

    return env.ASSETS.fetch(request);
  },
};

export default worker;
