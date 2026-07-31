"use client"

import { useEffect, useRef } from "react"

export function useReveal() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Fallback: if IntersectionObserver doesn't fire within 2s, make visible
    const fallbackTimer = setTimeout(() => {
      el.classList.add("visible")
    }, 2000)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          clearTimeout(fallbackTimer)
          el.classList.add("visible")
          observer.unobserve(el)
        }
      },
      { threshold: 0.05 }
    )

    observer.observe(el)
    return () => {
      clearTimeout(fallbackTimer)
      observer.disconnect()
    }
  }, [])

  return ref
}
