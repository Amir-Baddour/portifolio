"use client"

import { useReveal } from "@/hooks/use-reveal"
import { Star, CheckCircle2, Sparkles } from "lucide-react"
import { skillGroups } from "@/lib/site-data"
import { SectionHeading } from "@/components/ui-blocks/section-heading"
import { SkillBadge } from "@/components/ui-blocks/skill-badge"

const tierIcons = [Star, CheckCircle2, Sparkles]

export function SkillsSection() {
  const sectionRef = useReveal()

  return (
    <section id="skills" ref={sectionRef} className="reveal px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Technologies I work with"
          description="Grouped by proficiency so you know exactly where I am strongest."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = tierIcons[index] ?? Star
            return (
              <div
                key={group.tier}
                className="glass-card flex flex-col rounded-xl p-6 transition-all hover:border-primary/30"
              >
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{group.tier}</h3>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">{group.description}</p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <SkillBadge key={skill} label={skill} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
