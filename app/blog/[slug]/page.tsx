import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBlogPostBySlug, getAllPostSlugs, getBlogPosts } from '@/lib/markdown'
import { BlogPostLayout } from '@/components/blog-post-layout'
import { BlogCard } from '@/components/blog-card'
import { Navbar } from '@/components/navbar'

interface Props {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs()
  return slugs
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = await getBlogPostBySlug(params.slug)
    return {
      title: `${post.title} | BAYARKITA Blog`,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        type: 'article',
      },
    }
  } catch (error) {
    console.error('[v0] Error generating metadata for post:', params.slug, error)
    return {
      title: 'Blog Post | BAYARKITA',
    }
  }
}

export default async function BlogPostPage({ params }: Props) {
  let post

  try {
    post = await getBlogPostBySlug(params.slug)
  } catch (error) {
    console.error('[v0] Error loading blog post:', params.slug, error)
    notFound()
  }

  // Get related posts (same category)
  const allPosts = await getBlogPosts()
  const relatedPosts = allPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3)

  return (
    <>
      <Navbar />
      <BlogPostLayout
        title={post.title}
        date={post.date}
        author={post.author}
        category={post.category}
        readingTime={post.readingTime}
        html={post.html}
      />

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-border bg-background py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold">Artikel Terkait</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <BlogCard
                  key={relatedPost.slug}
                  slug={relatedPost.slug}
                  title={relatedPost.title}
                  date={relatedPost.date}
                  author={relatedPost.author}
                  description={relatedPost.description}
                  category={relatedPost.category}
                  readingTime={relatedPost.readingTime}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
