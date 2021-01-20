module.exports = {
  type: `
    type Post {
      _id: ID!
      title: String!
      description: String
      h1: String
      tags: [Tag]
      gelery: [Image]
      componentName: String
      content: String
      image_large: Image
      image_small: Image
      link: String
      user: User
      category: Category
      status: Status
      created_at: Date
      updated_at: Date
    }

    type Page {
      _id: ID!
      title: String!
      description: String
      h1: String
      componentName: String
      content: String
      tags: [Tag]
      gelery: [Image]
      image_large: Image
      image_small: Image
      link: String
      user: User
      created_at: Date
      updated_at: Date
    }

    input UpdatePostData {
      _id: String!
      title: String!
      description: String
      h1: String
      componentName: String
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
    post(_id: String): Post
    page(link: String): Page
  `,
  mutation: `
    createPost(
      title: String!
      description: String
      h1: String
      tags: [String]
      gelery: [String]
      content: String
      componentName: String
      image_large: String
      image_small: String
      link: String
      user: String
      category: String
      status: String
    ): Post
    updatePost(
      _id: String!
      title: String!
      description: String
      tags: [String]
      gelery: [String]
      componentName: String
      h1: String
      content: String
      image_large: String
      image_small: String
      link: String
      user: String
      category: String
      status: String
    ): Int
    deletePost(_id: String!): Int
  `
}
