module.exports = {
  type: `
    type Category {
      _id: String
      name: String
      title: String
      componentName: String
      description: String
      h1: String
      content: String
      user: User
      status: Status
      image_large: Image
      image_small: Image
      link: String
      created_at: Date
      updated_at: Date
    }

    input UpdateCategoryData {
      name: String
      title: String
      description: String
      h1: String
      componentName: String
      user: String
      status: String
      content: String
      image_large: String
      image_small: String
      link: String
    }
  `,
  query: `
    categories: [Category]
    category(_id: String!): Category
    categoryElements(link: String!, page: Int): [Post]
  `,
  mutation: `
    createCategory(
      name: String!
      title: String
      description: String
      componentName: String
      user: String
      status: String
      h1: String
      content: String
      image_large: String
      image_small: String
    ): Category
    updateCategory(
      _id: String!
      name: String!
      title: String
      description: String
      componentName: String
      user: String
      status: String
      h1: String
      content: String
      image_large: String
      image_small: String
    ): Int
    deleteCategory(_id: String!): Int
  `
}
