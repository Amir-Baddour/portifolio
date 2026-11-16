"use client"

import { useReveal } from "@/hooks/use-reveal"
import { projects } from "@/lib/site-data"
import { SectionHeading } from "@/components/ui-blocks/section-heading"
import { ProjectCard } from "@/components/ui-blocks/project-card"

export function ProjectsSection() {
  const sectionRef = useReveal()

  return (
    <section id="projects" ref={sectionRef} className="reveal px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Case studies"
          title="The work, the decisions, and my role"
          description="A closer look at the context behind each project, what I built, and the engineering choices that shaped it."
        />

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
