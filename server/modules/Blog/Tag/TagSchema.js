module.exports = {
  type: `
    type Tag {
      _id: ID!
      name: String!
      slug: String!
      created_at: Date
      updated_at: Date
    }
  `,
  query: `
  tags: [Tag]
  `,
  mutation: `
  createTag(name: String!, slug: String!): Tag
  updateTag(_id: String!, name: String, slug: String): Int
  deleteTag(_id: String!): Int
  `
}
