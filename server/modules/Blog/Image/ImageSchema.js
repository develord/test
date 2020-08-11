module.exports = {
  type: `
    type Image {
      _id: ID!
      low: String!
      high: String!
      created_at: Date
      updated_at: Date
    }
    type File {
      filename: String!
      mimetype: String!
      encoding: String!
    }
  `,
  query: `
    images: [Image]
  `,
  mutation: `
    uploadFile(file: Upload!): File!
    deleteImage(_id: String!): Int
  `
}
