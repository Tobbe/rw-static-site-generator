import fs from 'fs'
import process from 'process'

import fm from 'front-matter'
import type { QueryResolvers } from 'types/graphql'

interface FrontMatter {
  author: string
  title: string
  createdAt: string
  updateAt?: string
}

export const blogPost: QueryResolvers['blogPost'] = ({ slug }) => {
  console.log('slug', slug, 'cwd', process.cwd())

  if (slug.includes('.') || slug.includes('/') || slug.includes('\\')) {
    throw new Error('Invalid slug')
  }

  const file = fs.readFileSync(`blog/${slug}.md`, 'utf-8')

  const metadata = fm<FrontMatter>(file)

  return { ...metadata.attributes, body: metadata.body }
}
