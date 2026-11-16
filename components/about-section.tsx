"use client"

import { MapPin, Target, Mail, GraduationCap, Trophy } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"
import { SITE } from "@/lib/site-data"
import { SectionHeading } from "@/components/ui-blocks/section-heading"

export function AboutSection() {
  const sectionRef = useReveal()

  return (
    <section id="about" ref={sectionRef} className="reveal px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About me"
          title="Backend systems, secure APIs, and the infrastructure behind them"
          description="I work across application logic and operational infrastructure, with a strong interest in security, reliability, and clean data design."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="glass-card rounded-xl p-6 md:p-8">
              <div className="mb-8 flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Education</h3>
                  <p className="text-sm text-muted-foreground">{SITE.education}</p>
                  <p className="text-sm text-muted-foreground">{SITE.university}</p>
                </div>
              </div>

              <div className="mb-8 flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Trophy className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Achievement</h3>
                  <p className="text-sm text-muted-foreground">
                    Participant – Lebanese Collegiate Programming Contest (LCPC 2024)
                  </p>
                </div>
              </div>

              <p className="leading-relaxed text-muted-foreground text-pretty">
                I design <span className="font-semibold text-foreground">the API and data model</span> behind an application, then take ownership of where it runs: <span className="font-semibold text-foreground">Linux servers on AWS, containers, and the automation around them</span>. Before engineering full-time, I spent years in security research, which shaped how I think about authentication, validation, and systems design.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-2">
            <div className="glass-card flex items-center gap-4 rounded-xl p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Location</p>
                <p className="font-medium text-foreground">{SITE.location}</p>
              </div>
            </div>

            <div className="glass-card flex items-center gap-4 rounded-xl p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Focus</p>
                <p className="font-medium text-foreground">Backend + DevOps + Security</p>
              </div>
            </div>

            <div className="glass-card flex items-center gap-4 rounded-xl p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-medium text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:underline"
                >
                  {SITE.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
