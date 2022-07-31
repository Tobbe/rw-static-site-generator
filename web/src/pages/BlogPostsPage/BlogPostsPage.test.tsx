import { render } from '@redwoodjs/testing/web'

import BlogPostsPage from './BlogPostsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BlogPostsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BlogPostsPage />)
    }).not.toThrow()
  })
})
