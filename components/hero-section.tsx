import Image from "next/image"
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react"
import { SITE } from "@/lib/site-data"
import { SocialLink } from "@/components/ui-blocks/social-link"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-28"
    >
      <div className="teal-glow absolute left-1/3 top-1/4 animate-pulse" aria-hidden="true" />
      <div
        className="teal-glow absolute bottom-1/4 right-1/4 animate-pulse"
        style={{ animationDelay: "1s" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.32em] text-primary/80">
              software engineer // backend + devops
            </p>

            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              {SITE.fullName}
            </h1>

            <p className="mt-5 max-w-2xl text-xl font-medium text-primary sm:text-2xl">
              Building backend systems and the infrastructure they run on.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I design <span className="font-semibold text-foreground">the API and the data model</span> behind it, then take responsibility for <span className="font-semibold text-foreground">containers, deployment pipelines, and the systems that keep them running</span>.
            </p>

            <div className="mt-10 flex flex-col flex-wrap items-stretch gap-3 sm:flex-row sm:items-center">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:scale-[1.02] hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                View Projects
                <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href={SITE.cv}
                download="Amir_Sami_Baddour_CV.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary/80 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Download CV
                <Download className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary/80 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-8 flex items-center gap-2">
              <SocialLink href={SITE.linkedin} label="LinkedIn profile" icon={Linkedin} />
              <SocialLink href={SITE.github} label="GitHub profile" icon={Github} />
              <SocialLink href={`mailto:${SITE.email}`} label="Send email" icon={Mail} />
            </div>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-2xl border border-primary/30 shadow-xl shadow-primary/10">
            <Image
              src="/images/profile.png"
              alt="Portrait of Amir Sami Baddour"
              fill
              sizes="(max-width: 1024px) 70vw, 280px"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        <div className="mt-12 hidden overflow-x-auto lg:block">
          <svg
            className="pipeline-map block h-auto w-full"
            viewBox="0 0 1040 236"
            role="group"
            aria-labelledby="pipeline-title pipeline-description"
          >
            <title id="pipeline-title">Portfolio overview as a delivery pipeline</title>
            <desc id="pipeline-description">
              Four case studies branch from the overview, then rejoin before experience,
              capabilities, credentials, and contact.
            </desc>
            <text x="20" y="14" fill="var(--muted-foreground)" fontSize="11" fontFamily="monospace">
              source
            </text>
            <text x="236" y="14" fill="var(--muted-foreground)" fontSize="11" fontFamily="monospace">
              build, 4 parallel jobs
            </text>
            <text x="500" y="14" fill="var(--muted-foreground)" fontSize="11" fontFamily="monospace">
              verify
            </text>
            <text x="930" y="14" fill="var(--muted-foreground)" fontSize="11" fontFamily="monospace">
              release
            </text>

            <g fill="none" stroke="var(--border)" strokeWidth="1.5">
              <path d="M140 128 C190 128 180 47 236 47" />
              <path d="M140 128 C190 128 190 101 236 101" />
              <path d="M140 128 C190 128 190 155 236 155" />
              <path d="M140 128 C190 128 180 209 236 209" />
              <path d="M416 47 C470 47 460 128 500 128" />
              <path d="M416 101 C460 101 460 128 500 128" />
              <path d="M416 155 C460 155 460 128 500 128" />
              <path d="M416 209 C470 209 460 128 500 128" />
              <path d="M620 128 H650 M780 128 H810 M900 128 H930" />
            </g>

            <g fill="var(--card)" stroke="var(--border)">
              <a href="#hero" aria-label="Go to overview">
                <rect x="20" y="110" width="120" height="36" rx="18" />
                <text x="80" y="133" textAnchor="middle" fill="var(--foreground)" stroke="none" fontSize="13">
                  Overview
                </text>
              </a>
              <a href="#case-1" aria-label="Go to Digital Wallet case study">
                <rect x="236" y="30" width="180" height="34" rx="17" />
                <text x="326" y="52" textAnchor="middle" fill="var(--foreground)" stroke="none" fontSize="13">
                  Wallet backend
                </text>
              </a>
              <a href="#case-2" aria-label="Go to School Management case study">
                <rect x="236" y="84" width="180" height="34" rx="17" />
                <text x="326" y="106" textAnchor="middle" fill="var(--foreground)" stroke="none" fontSize="13">
                  School system
                </text>
              </a>
              <a href="#case-3" aria-label="Go to Security Research case study">
                <rect x="236" y="138" width="180" height="34" rx="17" />
                <text x="326" y="160" textAnchor="middle" fill="var(--foreground)" stroke="none" fontSize="13">
                  Security research
                </text>
              </a>
              <a href="#case-4" aria-label="Go to AirDropX case study">
                <rect x="236" y="192" width="180" height="34" rx="17" />
                <text x="326" y="214" textAnchor="middle" fill="var(--foreground)" stroke="none" fontSize="13">
                  AirDropX
                </text>
              </a>
              <a href="#experience" aria-label="Go to Experience">
                <rect x="500" y="110" width="120" height="36" rx="18" />
                <text x="560" y="133" textAnchor="middle" fill="var(--foreground)" stroke="none" fontSize="13">
                  Experience
                </text>
              </a>
              <a href="#skills" aria-label="Go to Capabilities">
                <rect x="650" y="110" width="130" height="36" rx="18" />
                <text x="715" y="133" textAnchor="middle" fill="var(--foreground)" stroke="none" fontSize="13">
                  Capabilities
                </text>
              </a>
              <a href="#certifications" aria-label="Go to Credentials">
                <rect x="810" y="110" width="90" height="36" rx="18" />
                <text x="855" y="133" textAnchor="middle" fill="var(--foreground)" stroke="none" fontSize="13">
                  Credentials
                </text>
              </a>
              <a href="#contact" aria-label="Go to Contact">
                <rect x="930" y="110" width="90" height="36" rx="18" />
                <text x="975" y="133" textAnchor="middle" fill="var(--foreground)" stroke="none" fontSize="13">
                  Contact
                </text>
              </a>
            </g>
          </svg>
          <p className="mt-2 text-sm text-muted-foreground">
            This page is laid out as a pipeline. The four case studies run as parallel jobs.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 lg:hidden">
          {["Digital Wallet", "School Management", "Security Research", "AirDropX"].map(
            (label, index) => (
              <a
                key={label}
                href={`#case-${index + 1}`}
                className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground transition-colors hover:border-primary"
              >
                <span className="mr-2 font-mono text-xs text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {label}
              </a>
            ),
          )}
        </div>

        <div className="mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            { value: "3 years", label: "of engineering and research, Oct 2022–Aug 2025" },
            { value: "38", label: "REST endpoints in AirDropX" },
            { value: "3", label: "backend stacks: ASP.NET MVC, Node.js, PHP" },
            { value: "3", label: "research projects, each with a written report" },
          ].map((item) => (
            <div key={item.label} className="glass-card rounded-xl border border-border p-5">
              <div className="text-3xl font-semibold tracking-[-0.04em] text-foreground">{item.value}</div>
              <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
