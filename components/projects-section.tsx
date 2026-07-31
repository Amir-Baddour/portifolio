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
          eyebrow="Projects"
          title="Featured work"
          description="A closer look at what I built, the problem it solved, and my role."
        />

        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
