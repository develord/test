module.exports = {
  type: `
    type Tag {
      _id: ID!
      name: String!
      slug: String!
      image: Image
      created_at: Date
      updated_at: Date
    }
  `,
  query: `
  tags: [Tag]
  tag(_id: String): Tag
  `,
  mutation: `
  createTag(name: String!, slug: String!, image: String): Tag
  updateTag(_id: String!, name: String, slug: String, image: String): Int
  deleteTag(_id: String!): Int
  `
}
