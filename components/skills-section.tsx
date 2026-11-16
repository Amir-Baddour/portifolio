"use client"

import { useReveal } from "@/hooks/use-reveal"
import { capabilities } from "@/lib/site-data"
import { SectionHeading } from "@/components/ui-blocks/section-heading"

export function SkillsSection() {
  const sectionRef = useReveal()

  return (
    <section id="skills" ref={sectionRef} className="reveal px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Capabilities"
          title="What I build and how I approach it"
          description="A practical view of the systems I have worked on, the engineering behind them, and where I applied those skills."
        />

        <div className="glass-card overflow-hidden rounded-xl">
          <table className="w-full border-collapse text-left">
            <thead className="hidden border-b border-border text-sm text-muted-foreground md:table-header-group">
              <tr>
                <th scope="col" className="px-5 py-4 font-medium">Area</th>
                <th scope="col" className="px-5 py-4 font-medium">What I have done</th>
                <th scope="col" className="px-5 py-4 font-medium">Where</th>
              </tr>
            </thead>
            <tbody>
              {capabilities.map((capability) => (
                <tr
                  key={capability.area}
                  className="block border-b border-border p-5 last:border-0 md:table-row md:p-0"
                >
                  <th
                    scope="row"
                    className="block pb-2 font-medium text-foreground md:table-cell md:px-5 md:py-5 md:align-top"
                  >
                    {capability.area}
                  </th>
                  <td className="block pb-3 text-sm leading-relaxed text-muted-foreground md:table-cell md:px-5 md:py-5 md:align-top">
                    <span className="mr-2 font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground md:hidden">
                      What I have done
                    </span>
                    {capability.evidence}
                  </td>
                  <td className="block font-mono text-xs leading-relaxed text-primary md:table-cell md:px-5 md:py-5 md:align-top md:text-muted-foreground">
                    <span className="mr-2 font-sans text-[0.65rem] uppercase tracking-wider text-muted-foreground md:hidden">
                      Where
                    </span>
                    {capability.where}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
