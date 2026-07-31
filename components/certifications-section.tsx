"use client"

import { useReveal } from "@/hooks/use-reveal"
import { certifications } from "@/lib/site-data"
import { SectionHeading } from "@/components/ui-blocks/section-heading"
import { CertificationCard } from "@/components/ui-blocks/certification-card"

export function CertificationsSection() {
  const sectionRef = useReveal()

  return (
    <section id="certifications" ref={sectionRef} className="reveal px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Certifications" title="Professional credentials" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <CertificationCard key={cert.title} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  )
}
