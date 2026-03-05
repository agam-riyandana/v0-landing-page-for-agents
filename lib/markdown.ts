import { marked } from 'marked'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

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
  const fileNames = fs.readdirSync(blogPostsDirectory)
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      return getBlogPostBySlug(slug)
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

export function getBlogPostBySlug(slug: string): BlogPost {
  const fullPath = path.join(blogPostsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const html = marked(content) as string
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
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(blogPostsDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => ({
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    }))
}
