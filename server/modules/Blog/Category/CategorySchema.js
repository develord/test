module.exports = {
  type: `
    type Category {
      _id: String
      name: String
      title: String
      description: String
      h1: String
      content: String
      image_large: String
      image_small: String
      link: String
      created_at: Date
      updated_at: Date
    }

    input UpdateCategoryData {
      name: String
      title: String
      description: String
      h1: String
      content: String
      image_large: String
      image_small: String
      link: String
    }
  `,
  query: `
    categories: [Category]
    category(_id: String!): Category
  `,
  mutation: `
    createCategory(
      name: String!,
      title: String,
      description: String,
      h1: String,
      content: String,
      image_large: String,
      image_small: String,
      link: String
    ): Category
    updateCategory(_id: String!, data: UpdateCategoryData): Int
    deleteCategory(_id: String!): Int
  `
}
