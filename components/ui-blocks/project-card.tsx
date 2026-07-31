import Image from "next/image"
import { Github, ExternalLink, FileText } from "lucide-react"
import type { Project } from "@/lib/site-data"
import { LinkButton } from "./link-button"

export function ProjectCard({ project }: { project: Project }) {
  const isWalletProject = project.title === "Digital Wallet Platform"

  return (
    <article className="glass-card group overflow-hidden rounded-xl transition-all hover:border-primary/30">
      <div className={`grid gap-0 ${isWalletProject ? "lg:grid-cols-[7fr_5fr]" : "lg:grid-cols-2"}`}>
        {/* Screenshot */}
        <div className="border-b border-border bg-background lg:border-b-0 lg:border-r">
          <div className="p-4">
            <div className="relative aspect-16/10 overflow-hidden rounded-3xl bg-background">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {project.imageGallery?.length ? (
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
                {project.imageGallery.map((image) => (
                  <div
                    key={image}
                    className="relative overflow-hidden rounded-3xl border border-border bg-background shadow-sm"
                  >
                    <div className="aspect-4/3 w-full" />
                    <Image
                      src={image}
                      alt={`${project.title} screenshot`}
                      fill
                      sizes="(max-width: 1024px) 45vw, 25vw"
                      className="object-contain object-center"
                    />
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
          <p className="mb-4 text-sm text-primary">{project.subtitle}</p>

          <dl className="mb-5 space-y-3 text-sm leading-relaxed">
            <div>
              <dt className="font-semibold text-foreground">Problem</dt>
              <dd className="text-muted-foreground">{project.problem}</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Solution</dt>
              <dd className="text-muted-foreground">{project.solution}</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">My Contribution</dt>
              <dd className="text-muted-foreground">{project.contribution}</dd>
            </div>
          </dl>

          {/* Features */}
          <div className="mb-5 grid gap-2 sm:grid-cols-2">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <span className="h-1 w-1 shrink-0 rounded-full bg-primary" />
                {feature}
              </div>
            ))}
          </div>

          {/* Stack */}
          <div className="mb-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* ML note */}
          {project.mlNote && (
            <div className="mb-5 rounded-lg border border-primary/10 bg-primary/5 p-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
                ML Integration
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.mlNote}
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <LinkButton
              href={project.githubUrl}
              label="View Code"
              disabledLabel="Code Coming Soon"
              icon={Github}
            />
            <LinkButton
              href={project.liveUrl}
              label="Live Demo"
              disabledLabel="No Live Demo"
              icon={ExternalLink}
              variant="primary"
            />
            <LinkButton
              href={project.caseStudyUrl}
              label="Case Study"
              disabledLabel="No Case Study"
              icon={FileText}
            />
          </div>
        </div>
      </div>
    </article>
  )
}
