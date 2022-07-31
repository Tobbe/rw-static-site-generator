import type { BlogPost } from '@prisma/client'

import { blogPosts } from './blogPosts'
import type { StandardScenario } from './blogPosts.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('blogPosts', () => {
  scenario('returns all blogPosts', async (scenario: StandardScenario) => {
    const result = await blogPosts()

    expect(result.length).toEqual(Object.keys(scenario.blogPost).length)
  })
})
