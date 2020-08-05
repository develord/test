module.exports = {
  type: `
    type Post {
      _id: ID!
      title: String!
      description: String
      h1: String
      content: String
      image_large: String
      image_small: String
      link: String
      user: User
      category: Category
      status: Status
      created_at: Date
      updated_at: Date
    }

    input UpdatePostData {
      title: String!
      description: String
      h1: String
      content: String
      image_large: String
      image_small: String
      link: String
      user: String
      category: String
      status: String
    }
  `,
  query: `
    posts: [Post]
    post(_id: String!): Post
  `,
  mutation: `
    createPost(
      title: String!,
      description: String,
      h1: String,
      content: String,
      image_large: String,
      image_small: String,
      link: String,
      user: String,
      category: String,
      status: String
    ): Post
    updatePost(_id: String!, data: UpdatePostData): Int
    deletePost(_id: String!): Int
  `
}
