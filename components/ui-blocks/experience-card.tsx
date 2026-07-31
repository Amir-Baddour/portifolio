import { Briefcase } from "lucide-react"
import type { Experience } from "@/lib/site-data"

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div className="relative flex gap-6 md:pl-14">
      {/* Timeline dot */}
      <div className="absolute left-3 top-6 hidden h-4 w-4 rounded-full border-2 border-primary bg-background md:block" />

      <div className="glass-card w-full rounded-xl p-6 transition-all hover:border-primary/30">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 md:hidden">
              <Briefcase className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{experience.title}</h3>
              <p className="text-sm text-primary">{experience.company}</p>
            </div>
          </div>
          <span className="text-sm text-muted-foreground">{experience.period}</span>
        </div>
        <ul className="space-y-2">
          {experience.bullets.map((bullet, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
