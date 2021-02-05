module.exports = {
  type: `
    type Role {
      _id: ID!
      name: String
      desc: String
      permissions: [Permission]
      created_at: Date
      updated_at: Date
    }

    input UpdateRoleData {
      name: String
      desc: String
    }
  `,
  query: `
    roles: [Role]
    role(_id: String!): Role
  `,
  mutation: `
    createRole(name: String!, desc: String, permissions: [String]): Role
    updateRole(_id: String!, data: UpdateRoleData): Int
    deleteRole(_id: String!): Int
  `
}
