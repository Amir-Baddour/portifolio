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
      className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-primary hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <Icon className="h-5 w-5" />
    </a>
  )
}
