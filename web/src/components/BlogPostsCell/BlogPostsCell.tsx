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
    <ul>
      {blogPosts.map((post) => {
        return (
          <li key={post.slug}>
            <a href={`/blog/${post.slug}`}>
              <div>
                <h2>{post.title}</h2>
                <span>{post.createdAt}</span>
              </div>
              <p>{post.summary}</p>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
