import type { NavQuery, NavQueryVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
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
        <li>
          <Link to={routes.home()}>Home</Link>
        </li>
        {blogPosts.map((post) => {
          return (
            <li key={post.slug}>
              <Link to={routes.blogPost({ slug: post.slug })}>
                {post.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
