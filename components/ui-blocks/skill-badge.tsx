export function SkillBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-md bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:bg-primary/10 hover:text-primary">
      {label}
    </span>
  )
}
