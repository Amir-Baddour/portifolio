"use client"

import { useReveal } from "@/hooks/use-reveal"
import { experiences } from "@/lib/site-data"
import { SectionHeading } from "@/components/ui-blocks/section-heading"
import { ExperienceCard } from "@/components/ui-blocks/experience-card"

export function ExperienceSection() {
  const sectionRef = useReveal()

  return (
    <section id="experience" ref={sectionRef} className="reveal px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Experience" title="Where I have worked" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-border md:block" aria-hidden="true" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp) => (
              <ExperienceCard key={`${exp.company}-${exp.title}`} experience={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
