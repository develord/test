module.exports = {
  type: `
    scalar Date

    type User {
      _id: ID!
      name: String!
      email: String!
      password: String!
      role: Role!
      confirmed_at: Date
      created_at: Date
      updated_at: Date
    }

    input UpdateUserData {
      name: String
      email: String
      password: String
      role: String!
      confirmed_at: Date
    }
  `,
  query: `
    users: [User]
    user(_id: String!): User
  `,
  mutation: `
    createUser(name: String!, email: String!, password: String!, roleId: String!): User
    updateUser(_id: String!, name: String!, email: String!, password: String, roleId: String!): Int
    deleteUser(_id: String!): Int
  `
}
