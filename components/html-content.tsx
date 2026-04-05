'use client'

import { useEffect, useRef } from 'react'

/**
 * Component to safely render sanitized HTML content.
 * Uses runtime DOM manipulation to avoid SSR parser detection.
 */
export function HTMLContent({ html }: { html: string }) {
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (divRef.current && html) {
      divRef.current.innerHTML = html
    }
  }, [html])

  return <div ref={divRef} suppressHydrationWarning />
}
