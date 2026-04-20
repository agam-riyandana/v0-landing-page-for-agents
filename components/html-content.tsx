'use client'

import { useEffect, useRef } from 'react'
import DOMPurify from 'dompurify'

/**
 * Component to safely render sanitized HTML content.
 * Strips script tags and other dangerous content before rendering.
 */
export function HTMLContent({ html }: { html: string }) {
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (divRef.current && html) {
      // Sanitize HTML to remove script tags and dangerous content
      const cleanHtml = typeof window !== 'undefined' ? DOMPurify.sanitize(html, { 
        ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'a', 'ul', 'ol', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
        ALLOWED_ATTR: ['href', 'target', 'rel']
      }) : html
      divRef.current.innerHTML = cleanHtml
    }
  }, [html])

  return <div ref={divRef} suppressHydrationWarning />
}
