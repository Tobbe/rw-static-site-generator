import fs from 'fs'

import fm from 'front-matter'
import type { QueryResolvers } from 'types/graphql'

interface FrontMatter {
  author: string
  title: string
  summary?: string
  createdAt: string
  updateAt?: string
}

export const blogPosts: QueryResolvers['blogPosts'] = () => {
  const blogPostFiles = fs
    .readdirSync('blog/')
    .filter((filename) => filename.endsWith('.md'))

  const blogPostsList = blogPostFiles.map((fileName) => {
    const file = fs.readFileSync(`blog/${fileName}`, 'utf-8')
    const metadata = fm<FrontMatter>(file)

    return {
      ...metadata.attributes,
      slug: fileName.slice(0, -3),
      body: metadata.body,
    }
  })

  return blogPostsList.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )
}

export const blogPost: QueryResolvers['blogPost'] = ({ slug }) => {
  if (slug.includes('.') || slug.includes('/') || slug.includes('\\')) {
    throw new Error('Invalid slug ' + slug)
  }

  const file = fs.readFileSync(`blog/${slug}.md`, 'utf-8')

  const metadata = fm<FrontMatter>(file)

  return { ...metadata.attributes, body: metadata.body }
}
