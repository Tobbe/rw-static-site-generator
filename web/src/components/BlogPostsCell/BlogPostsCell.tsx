import type { BlogPostsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query BlogPostsQuery {
    blogPosts {
      slug
      title
      summary
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ blogPosts }: CellSuccessProps<BlogPostsQuery>) => {
  return (
    <div>
      {blogPosts.map((post) => {
        return (
          <div key={post.slug}>
            <div>
              <h2>
                <a href={`/blog/${post.slug}`} key={post.slug}>
                  {post.title}
                </a>
              </h2>
              <span className="date-time">{post.createdAt}</span>
            </div>
            <p>{post.summary}</p>
          </div>
        )
      })}
    </div>
  )
}
