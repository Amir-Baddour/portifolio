import { NextResponse } from "next/server"
import { SITE } from "@/lib/site-data"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  const { name, email, message } = body as {
    name?: string
    email?: string
    message?: string
  }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 })
  }

  if (!EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const emailFrom = process.env.EMAIL_FROM

  if (!apiKey || !emailFrom) {
    console.error("Contact form delivery misconfigured: missing RESEND_API_KEY or EMAIL_FROM")
    return NextResponse.json(
      {
        error:
          "Email delivery is not configured for this deployment yet. Add RESEND_API_KEY and EMAIL_FROM in Vercel environment variables.",
      },
      { status: 503 },
    )
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: emailFrom,
      to: SITE.email,
      reply_to: email,
      subject: `Portfolio contact from ${name}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name.trim())}</p>
        <p><strong>Email:</strong> ${escapeHtml(email.trim())}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message.trim()).replace(/\n/g, "<br />")}</p>
      `,
    }),
  })

  if (!response.ok) {
    const responseText = await response.text().catch(() => "")
    console.error("Resend request failed:", response.status, responseText)
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
