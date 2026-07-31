import { Github, Linkedin, Mail } from "lucide-react"
import { SITE } from "@/lib/site-data"
import { SocialLink } from "@/components/ui-blocks/social-link"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="text-lg font-bold text-foreground">{SITE.fullName}</p>
          <p className="text-sm text-muted-foreground">{SITE.role}</p>
          <a
            href={`mailto:${SITE.email}`}
            className="text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:underline"
          >
            {SITE.email}
          </a>
        </div>

        <div className="flex items-center gap-2">
          <SocialLink href={SITE.linkedin} label="LinkedIn profile" icon={Linkedin} />
          <SocialLink href={SITE.github} label="GitHub profile" icon={Github} />
          <SocialLink href={`mailto:${SITE.email}`} label="Send email" icon={Mail} />
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-border pt-6 text-center">
        <p className="text-xs text-muted-foreground/70">
          {"\u00A9"} {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
