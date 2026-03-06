import { marked } from 'marked'
import matter from 'gray-matter'
import { promises as fs } from 'fs'
import path from 'path'

// Configure marked to be safe and consistent
marked.setOptions({
  breaks: true,
  gfm: true,
})

export interface BlogPost {
  slug: string
  title: string
  date: string
  author: string
  description: string
  category: string
  content: string
  html: string
  readingTime: number
}

const blogPostsDirectory = path.join(process.cwd(), 'blog-posts')

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const fileNames = await fs.readdir(blogPostsDirectory)
    const posts = await Promise.all(
      fileNames
        .filter((fileName) => fileName.endsWith('.md'))
        .map((fileName) => {
          const slug = fileName.replace(/\.md$/, '')
          return getBlogPostBySlug(slug)
        })
    )
    
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error('[v0] Error reading blog posts:', error)
    return []
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost> {
  try {
    const fullPath = path.join(blogPostsDirectory, `${slug}.md`)
    const fileContents = await fs.readFile(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Convert markdown to HTML
    let html = marked(content) as string
    
    // Post-process HTML to remove any potentially problematic content
    html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    html = html.replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, '')
    html = html.replace(/javascript:/gi, '')
    
    const readingTime = Math.ceil(content.split(/\s+/).length / 200)

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString().split('T')[0],
      author: data.author || 'Anonymous',
      description: data.description || '',
      category: data.category || 'General',
      content,
      html,
      readingTime,
    }
  } catch (error) {
    console.error(`[v0] Error reading blog post ${slug}:`, error)
    throw error
  }
}

export async function getAllPostSlugs() {
  try {
    const fileNames = await fs.readdir(blogPostsDirectory)
    return fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => ({
        params: {
          slug: fileName.replace(/\.md$/, ''),
        },
      }))
  } catch (error) {
    console.error('[v0] Error reading post slugs:', error)
    return []
  }
}
