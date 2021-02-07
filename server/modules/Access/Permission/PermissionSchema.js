module.exports = {
  type: `
    type Permission {
      _id: ID!
      name: String
      desc: String
      created_at: Date
      updated_at: Date
    }

    input UpdatePermissionData {
      name: String
      desc: String
    }
  `,
  query: `
    permissions: [Permission]
    permission(_id: String!): Permission
  `,
  mutation: `
    createPermission(name: String!, desc: String): Permission
    updatePermission(_id: String!, name: String, desc: String): Int
    deletePermission(_id: String!): Int
  `
}
