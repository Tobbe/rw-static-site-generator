import { blogPosts } from '$api/src/services/blogPosts/blogPosts'

export function routeParameters() {
  return blogPosts().map((blog) => ({ slug: blog.slug }))
}
