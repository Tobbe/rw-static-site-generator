import type { Prisma, BlogPost } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.BlogPostCreateArgs>({
  blogPost: {
    one: {
      data: {
        slug: 'String',
        author: 'String',
        createdAt: '2022-07-31T08:37:08Z',
        title: 'String',
        body: 'String',
      },
    },
    two: {
      data: {
        slug: 'String',
        author: 'String',
        createdAt: '2022-07-31T08:37:08Z',
        title: 'String',
        body: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<BlogPost, 'blogPost'>
