import Link from 'next/link'
import { format } from 'date-fns'
import { Clock, User, Tag } from 'lucide-react'

interface BlogCardProps {
  slug: string
  title: string
  date: string
  author: string
  description: string
  category: string
  readingTime: number
}

export function BlogCard({
  slug,
  title,
  date,
  author,
  description,
  category,
  readingTime,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <article className="group h-full rounded-lg border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/50">
        <div className="mb-3 flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Tag className="h-3 w-3" />
            {category}
          </span>
        </div>

        <h3 className="mb-2 line-clamp-2 text-xl font-bold transition-colors group-hover:text-primary">
          {title}
        </h3>

        <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">
          {description}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <User className="h-3.5 w-3.5" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span>{readingTime} min read</span>
          </div>
          <time>{format(new Date(date), 'MMM dd, yyyy')}</time>
        </div>
      </article>
    </Link>
  )
}
