import Image from "next/image"
import { Github, ExternalLink, FileText } from "lucide-react"
import type { Project } from "@/lib/site-data"
import { LinkButton } from "./link-button"

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isWalletProject = index === 0

  return (
    <article
      id={`case-${index + 1}`}
      className="glass-card group overflow-hidden rounded-xl transition-all hover:border-primary/30"
    >
      <div className={`grid gap-0 ${isWalletProject ? "lg:grid-cols-[7fr_5fr]" : "lg:grid-cols-2"}`}>
        {/* Screenshot */}
        <div className="border-b border-border bg-background lg:border-b-0 lg:border-r">
          <div className="p-4">
            {project.image ? (
              <div className="relative aspect-16/10 overflow-hidden rounded-3xl bg-background">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ) : (
              <div
                className="flex aspect-16/10 flex-col justify-center gap-3 rounded-3xl border border-border bg-background p-6 sm:p-8"
                role="img"
                aria-label={`${project.title} flow: ${project.diagram?.join(", ")}`}
              >
                {project.diagram?.map((step, stepIndex) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="font-mono text-xs text-primary">
                      {String(stepIndex + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1 rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {project.architectureImage && (
              <figure className="mt-4">
                <div className="relative aspect-[2.35/1] overflow-hidden rounded-xl border border-border bg-background">
                  <Image
                    src={project.architectureImage.src}
                    alt={project.architectureImage.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>
                <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {project.architectureImage.caption}
                </figcaption>
              </figure>
            )}

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
          <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            <span className="text-primary">Case {String(index + 1).padStart(2, "0")}</span>
            <span aria-hidden="true" className="h-px w-8 bg-border" />
            <span>{project.subtitle}</span>
          </div>
          <h3 className="text-2xl font-semibold tracking-tight text-foreground">{project.title}</h3>

          <dl className="mb-5 space-y-3 text-sm leading-relaxed">
            <div>
              <dt className="font-semibold text-foreground">Context</dt>
              <dd className="text-muted-foreground">{project.problem}</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">What I built</dt>
              <dd className="text-muted-foreground">{project.solution}</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">My contribution</dt>
              <dd className="text-muted-foreground">{project.contribution}</dd>
            </div>
          </dl>

          <div className="mb-5 rounded-lg border border-border bg-background/50 p-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
              Engineering decisions
            </p>
            <ul className="space-y-2">
              {project.decisions.map((decision) => (
                <li key={decision} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {decision}
                </li>
              ))}
            </ul>
          </div>

          {project.nextStep && (
            <div className="mb-5 border-t border-border pt-4">
              <h4 className="mb-1 text-sm font-semibold text-foreground">Next</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">{project.nextStep}</p>
            </div>
          )}
          {project.review && (
            <div className="mb-5 border-t border-border pt-4">
              <h4 className="mb-1 text-sm font-semibold text-foreground">Review</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">{project.review}</p>
            </div>
          )}
          {project.method && (
            <div className="mb-5 border-t border-border pt-4">
              <h4 className="mb-1 text-sm font-semibold text-foreground">Method</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">{project.method}</p>
            </div>
          )}
          {project.takeaway && (
            <div className="mb-5 border-t border-border pt-4">
              <h4 className="mb-1 text-sm font-semibold text-foreground">What I took from it</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">{project.takeaway}</p>
            </div>
          )}

          {/* Features */}
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Key capabilities
          </div>
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
