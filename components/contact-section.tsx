"use client"

import { useState } from "react"
import { useReveal } from "@/hooks/use-reveal"
import {
  Send,
  Calendar,
  Mail,
  User,
  MessageSquare,
  Linkedin,
  Github,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react"
import { SITE } from "@/lib/site-data"
import { SectionHeading } from "@/components/ui-blocks/section-heading"

type Status = "idle" | "sending" | "success" | "error"

interface Errors {
  name?: string
  email?: string
  message?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function ContactSection() {
  const sectionRef = useReveal()
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>("idle")
  // Honeypot: bots fill this hidden field, humans never see it.
  const [honeypot, setHoneypot] = useState("")

  function validate(): boolean {
    const next: Errors = {}
    if (!formData.name.trim()) next.name = "Please enter your name."
    if (!formData.email.trim()) {
      next.email = "Please enter your email."
    } else if (!EMAIL_RE.test(formData.email)) {
      next.email = "Please enter a valid email address."
    }
    if (!formData.message.trim()) next.message = "Please enter a message."
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    // Silently succeed for bots without sending anything.
    if (honeypot) {
      setStatus("success")
      return
    }

    if (!validate()) return

    setStatus("sending")
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setStatus("success")
      setFormData({ name: "", email: "", message: "" })
      setErrors({})
    } catch {
      setStatus("error")
    }
  }

  const inputBase =
    "w-full rounded-lg border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 transition-colors"

  return (
    <section id="contact" ref={sectionRef} className="reveal px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect"
          description="Open to backend engineering, fintech, and ML-focused roles and collaborations. Send a message or book a quick call."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              {/* Honeypot field - hidden from users, visible to bots */}
              <div className="absolute left-[-9999px]" aria-hidden="true">
                <label htmlFor="company">Company (leave this empty)</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <User className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`${inputBase} ${errors.name ? "border-destructive focus:ring-destructive" : "border-border focus:border-primary focus:ring-primary"}`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-destructive">
                    <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <Mail className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`${inputBase} ${errors.email ? "border-destructive focus:ring-destructive" : "border-border focus:border-primary focus:ring-primary"}`}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-destructive">
                    <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <MessageSquare className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${inputBase} resize-none ${errors.message ? "border-destructive focus:ring-destructive" : "border-border focus:border-primary focus:ring-primary"}`}
                  placeholder="Tell me about your project or role..."
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-destructive">
                    <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" aria-hidden="true" />
                  </>
                )}
              </button>

              {/* Feedback messages */}
              <div aria-live="polite">
                {status === "success" && (
                  <p className="flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/10 px-4 py-3 text-sm text-primary">
                    <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                    Thank you. Your message has been sent successfully.
                  </p>
                )}
                {status === "error" && (
                  <p className="flex items-center gap-2 rounded-lg border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                    <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                    Something went wrong. Please try again or contact me directly by email.
                  </p>
                )}
              </div>
            </form>
          </div>

          {/* Direct contact + booking */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="glass-card rounded-xl p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Schedule a call
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Schedule a 30-minute introductory call.
              </p>
              <a
                href={SITE.calendar}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Calendar className="h-4 w-4" aria-hidden="true" />
                Schedule a 30-Minute Call
              </a>
            </div>

            <div className="glass-card rounded-xl p-6">
              <h3 className="mb-4 text-sm font-semibold text-foreground">Direct contact</h3>
              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-muted-foreground transition-colors hover:text-primary hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Email Amir
                </a>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-muted-foreground transition-colors hover:text-primary hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Linkedin className="h-4 w-4 shrink-0" aria-hidden="true" />
                  View LinkedIn
                </a>
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-muted-foreground transition-colors hover:text-primary hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Github className="h-4 w-4 shrink-0" aria-hidden="true" />
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
