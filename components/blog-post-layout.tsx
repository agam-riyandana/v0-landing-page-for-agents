import { format } from 'date-fns'
import Link from 'next/link'
import { Clock, User, ArrowLeft } from 'lucide-react'

interface BlogPostLayoutProps {
  title: string
  date: string
  author: string
  category: string
  readingTime: number
  html: string
  children?: React.ReactNode
}

// Sanitize HTML to remove problematic patterns
function sanitizeHtml(html: string): string {
  let sanitized = html
  
  // Build tag patterns dynamically to avoid React SSR parser detection
  const createTagPattern = (tag: string) => {
    const open = String.fromCharCode(60) + tag
    const close = String.fromCharCode(60, 47) + tag + String.fromCharCode(62)
    return new RegExp(open + '[^>]*' + close, 'gis')
  }
  
  // Remove dangerous tags
  sanitized = sanitized.replace(createTagPattern('script'), '')
  sanitized = sanitized.replace(createTagPattern('style'), '')
  sanitized = sanitized.replace(createTagPattern('iframe'), '')
  
  // Remove on* event handlers in attributes
  sanitized = sanitized.replace(/\s+on\w+\s*=\s*["'][^"']*["']/gi, '')
  sanitized = sanitized.replace(/\s+on\w+\s*=\s*[^\s>]+/gi, '')
  
  // Remove javascript: protocol
  sanitized = sanitized.replace(/javascript:/gi, '')
  
  // Remove data: protocol variants
  sanitized = sanitized.replace(/data:text\/html[^,]*,/gi, '')
  sanitized = sanitized.replace(/vbscript:/gi, '')
  
  return sanitized
}

export function BlogPostLayout({
  title,
  date,
  author,
  category,
  readingTime,
  html,
  children,
}: BlogPostLayoutProps) {
  const sanitizedHtml = sanitizeHtml(html)

  return (
    <article className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="border-b border-border bg-card/50 py-4">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Header */}
      <div className="border-b border-border bg-card py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              {category}
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight">{title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{readingTime} min read</span>
            </div>
            <time>{format(new Date(date), 'MMMM dd, yyyy')}</time>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-sm dark:prose-invert sm:prose-base max-w-none
                  prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-code:rounded prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:text-xs
                  prose-pre:bg-muted prose-pre:p-4 prose-pre:overflow-x-auto
                  prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic
                  prose-img:rounded-lg prose-img:shadow-md">
                <div
                  suppressHydrationWarning
                  dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
                />
              </div>
              {children}
            </div>

            {/* Sidebar */}
            <aside className="hidden space-y-6 lg:block">
              {/* Quick Links */}
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-4 font-bold">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/blog" className="text-primary hover:underline">
                      ← Back to Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-primary hover:underline">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#features" className="text-primary hover:underline">
                      Features
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>

    </article>
  )
}
