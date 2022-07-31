export const schema = gql`
  type BlogPost {
    slug: String!
    author: String!
    createdAt: DateTime!
    updatedAt: DateTime
    title: String!
    summary: String
    body: String!
  }

  type Query {
    blogPosts: [BlogPost]! @skipAuth
    blogPost(slug: String!): BlogPost @skipAuth
  }
`
