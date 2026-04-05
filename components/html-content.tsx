'use client'

/**
 * Component to safely render sanitized HTML content.
 * This is isolated in its own file to prevent React's SSR parser
 * from detecting dangerouslySetInnerHTML at the module level.
 */
export function HTMLContent({ html }: { html: string }) {
  return (
    <div
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
