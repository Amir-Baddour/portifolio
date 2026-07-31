import Image from "next/image"
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react"
import { SITE } from "@/lib/site-data"
import { SocialLink } from "@/components/ui-blocks/social-link"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 pb-16"
    >
      {/* Animated teal glow */}
      <div className="teal-glow absolute top-1/4 left-1/3 animate-pulse" aria-hidden="true" />
      <div
        className="teal-glow absolute bottom-1/4 right-1/4 animate-pulse"
        style={{ animationDelay: "1s" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-10 lg:flex-row lg:gap-16">
        {/* Profile Image */}
        <div className="shrink-0">
          <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-primary/30 shadow-lg shadow-primary/10 sm:h-56 sm:w-56 lg:h-64 lg:w-64">
            <Image
              src="/images/profile.png"
              alt="Portrait of Amir Sami Baddour"
              fill
              sizes="(max-width: 640px) 10rem, (max-width: 1024px) 14rem, 16rem"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center lg:text-left">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
            {SITE.fullName}
          </h1>

          <p className="mb-6 text-lg font-medium text-primary sm:text-xl md:text-2xl">
            {SITE.role}
          </p>

          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0 text-pretty">
            {SITE.subtitle}
          </p>

          <div className="mb-10 flex flex-col flex-wrap items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              View Projects
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href={SITE.cv}
              target="_blank"
              rel="noopener noreferrer"
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

          <div className="flex items-center justify-center gap-2 lg:justify-start">
            <SocialLink href={SITE.linkedin} label="LinkedIn profile" icon={Linkedin} />
            <SocialLink href={SITE.github} label="GitHub profile" icon={Github} />
            <SocialLink href={`mailto:${SITE.email}`} label="Send email" icon={Mail} />
          </div>
        </div>
      </div>
    </section>
  )
}
