import type { LucideIcon } from "lucide-react"

type Variant = "primary" | "secondary"

interface LinkButtonProps {
  href: string
  label: string
  /** Label shown when the link is disabled (href === "#") */
  disabledLabel?: string
  icon?: LucideIcon
  variant?: Variant
  external?: boolean
  className?: string
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:opacity-90 hover:scale-[1.02]",
  secondary:
    "border border-border bg-secondary text-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/30",
}

export function LinkButton({
  href,
  label,
  disabledLabel = "Coming Soon",
  icon: Icon,
  variant = "secondary",
  external = true,
  className = "",
}: LinkButtonProps) {
  const disabled = !href || href === "#"

  if (disabled) {
    return (
      <span
        aria-disabled="true"
        className={`${base} cursor-not-allowed border border-border bg-secondary/50 text-muted-foreground opacity-60 ${className}`}
      >
        {disabledLabel}
      </span>
    )
  }

  const isAnchor = href.startsWith("#")
  const externalProps =
    external && !isAnchor ? { target: "_blank", rel: "noopener noreferrer" } : {}

  return (
    <a href={href} {...externalProps} className={`${base} ${variants[variant]} ${className}`}>
      {label}
      {Icon && <Icon className="h-4 w-4" />}
    </a>
  )
}
