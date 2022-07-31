import markdownIt from 'markdown-it'
import type {
  FindBlogPostQuery,
  FindBlogPostQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

const md = markdownIt()

export const QUERY = gql`
  query FindBlogPostQuery($slug: String!) {
    blogPost: blogPost(slug: $slug) {
      author
      title
      createdAt
      updatedAt
      body
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindBlogPostQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  blogPost,
}: CellSuccessProps<FindBlogPostQuery, FindBlogPostQueryVariables>) => {
  return (
    <article>
      <h1>{blogPost.title}</h1>
      <section dangerouslySetInnerHTML={{ __html: md.render(blogPost.body) }} />
      <footer style={{ fontStyle: 'italic', margin: '1rem 0' }}>
        {blogPost.updatedAt || blogPost.createdAt} - {blogPost.author}
      </footer>
    </article>
  )
}
