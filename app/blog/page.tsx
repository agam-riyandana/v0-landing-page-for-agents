import { Metadata } from 'next'
import { getBlogPosts } from '@/lib/markdown'
import { BlogCard } from '@/components/blog-card'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog | BAYARKITA',
  description: 'Latest articles, tips, and tutorials about BAYARKITA pulsa and bill payment services.',
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/" className="text-sm font-medium text-primary hover:underline">
              ← Kembali ke Beranda
            </Link>
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Blog & Artikel</h1>
          <p className="text-lg text-muted-foreground">
            Pelajari tips, tutorial, dan informasi terbaru tentang BAYARKITA dan layanan pembayaran online kami.
          </p>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="rounded-lg border border-dashed border-border bg-card/50 py-12 text-center">
              <p className="text-muted-foreground">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  date={post.date}
                  author={post.author}
                  description={post.description}
                  category={post.category}
                  readingTime={post.readingTime}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="border-t border-border bg-card py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-primary/20 bg-primary/5 p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold">Siap Memulai?</h2>
            <p className="mb-6 text-muted-foreground">
              Bergabunglah dengan ribuan agen sukses yang menghasilkan pendapatan melalui BAYARKITA.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary/90 px-8 py-3 font-bold text-white transition-all hover:shadow-lg hover:scale-105"
            >
              Daftar Sekarang
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
