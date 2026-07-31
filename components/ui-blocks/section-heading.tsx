interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <div className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed text-pretty">
          {description}
        </p>
      )}
    </div>
  )
}
