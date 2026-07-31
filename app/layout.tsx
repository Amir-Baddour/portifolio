import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { SITE } from "@/lib/site-data"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

const title = `${SITE.name} | ${SITE.role}`
const description =
  "Portfolio of Amir Baddour, a backend-focused full-stack developer building secure web applications, REST APIs, fintech platforms, and machine-learning-enabled solutions."

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title,
  description,
  keywords: [
    "Amir Baddour",
    "Backend Developer",
    "Full-Stack Developer",
    "PHP",
    "Laravel",
    "ASP.NET",
    "REST APIs",
    "Fintech",
    "Machine Learning",
  ],
  authors: [{ name: SITE.fullName }],
  creator: SITE.fullName,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    url: SITE.url,
    title,
    description,
    siteName: title,
    images: [
      {
        url: "/images/profile.png",
        width: 1200,
        height: 630,
        alt: `${SITE.fullName} — ${SITE.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/profile.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
  width: "device-width",
  initialScale: 1,
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.fullName,
  jobTitle: SITE.role,
  email: `mailto:${SITE.email}`,
  url: SITE.url,
  address: {
    "@type": "PostalAddress",
    addressCountry: SITE.location,
  },
  sameAs: [SITE.linkedin, SITE.github],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <body
        className={`${inter.className} ${geistMono.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
