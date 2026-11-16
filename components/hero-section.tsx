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
        <div className="max-w-4xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.32em] text-primary/80">
            software engineer // backend + devops
          </p>

          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            {SITE.fullName}
          </h1>

          <p className="mt-5 max-w-2xl text-xl font-medium text-primary sm:text-2xl">
            Mid-senior software engineer working across backend systems and the infrastructure they run on.
          </p>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I design <span className="font-semibold text-foreground">the API and the data model</span> behind it, then take responsibility for <span className="font-semibold text-foreground">Linux servers on AWS, containers, and the pipeline</span> in between.
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

        <div className="mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            { value: "3 years", label: "of engineering and research" },
            { value: "4", label: "AWS services operated hands-on" },
            { value: "3", label: "backend stacks delivered" },
            { value: "3", label: "research projects with reports" },
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
