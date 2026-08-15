import type { LucideIcon } from "lucide-react"

interface SocialLinkProps {
  href: string
  label: string
  icon: LucideIcon
}

export function SocialLink({ href, label, icon: Icon }: SocialLinkProps) {
  const isMail = href.startsWith("mailto:")
  return (
    <a
      href={href}
      aria-label={label}
      {...(!isMail && { target: "_blank", rel: "noopener noreferrer" })}
      className="group inline-flex h-14 w-14 items-center justify-center rounded-lg text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-primary hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <Icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
    </a>
  )
}
