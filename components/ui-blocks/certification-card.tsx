import { Award, ExternalLink } from "lucide-react"
import type { Certification } from "@/lib/site-data"

export function CertificationCard({ cert }: { cert: Certification }) {
  const hasCredential = cert.credentialUrl && cert.credentialUrl !== "#"
  const showPlaceholder = !hasCredential

  return (
    <div className="glass-card group flex flex-col rounded-xl p-6 transition-all hover:border-primary/30 hover:scale-[1.02]">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <Award className="h-5 w-5 text-primary" />
        </div>
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {cert.issuer}
        </span>
      </div>

      <h3 className="mb-2 font-semibold leading-snug text-foreground">{cert.title}</h3>

      {cert.date && <p className="mb-3 text-xs text-muted-foreground">{cert.date}</p>}

      {cert.highlights.length > 0 && (
        <ul className="mb-4 space-y-1">
          {cert.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="h-1 w-1 shrink-0 rounded-full bg-primary" />
              {h}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-2">
        {hasCredential ? (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md text-xs font-medium text-primary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            View Certificate
            <ExternalLink className="h-3 w-3" />
          </a>
        ) : showPlaceholder ? (
          <span
            aria-disabled="true"
            className="inline-flex cursor-not-allowed items-center gap-1.5 text-xs font-medium text-muted-foreground opacity-70"
          >
            Credential Coming Soon
          </span>
        ) : null}
      </div>
    </div>
  )
}
