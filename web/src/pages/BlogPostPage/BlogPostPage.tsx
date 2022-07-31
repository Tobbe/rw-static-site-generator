import BlogPostCell from 'src/components/BlogPostCell'

type BlogPostPageProps = {
  slug: string
}

const BlogPostPage = ({ slug }: BlogPostPageProps) => {
  return <BlogPostCell slug={slug} />
}

export default BlogPostPage
