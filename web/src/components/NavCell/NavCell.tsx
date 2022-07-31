import type { NavQuery, NavQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query NavQuery {
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

export const Failure = ({ error }: CellFailureProps<NavQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  blogPosts,
}: CellSuccessProps<NavQuery, NavQueryVariables>) => {
  return (
    <nav>
      <ul>
        {blogPosts.map((post) => {
          return (
            <li key={post.slug}>
              <a href={`/blog/${post.slug}`}>{post.title}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
