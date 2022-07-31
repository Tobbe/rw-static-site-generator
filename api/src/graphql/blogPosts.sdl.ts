export const schema = gql`
  type BlogPost {
    slug: String!
    author: String!
    createdAt: DateTime!
    updatedAt: DateTime
    title: String!
    body: String!
  }

  type Query {
    blogPost(slug: String!): BlogPost @skipAuth
  }
`
