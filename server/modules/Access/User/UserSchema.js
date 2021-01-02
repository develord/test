module.exports = {
  type: `
    scalar Date

    type User {
      _id: ID!
      name: String!
      email: String!
      password: String!
      role: Role!
      image: String
      confirmed_at: Date
      created_at: Date
      updated_at: Date
    }

    input UpdateUserData {
      name: String
      email: String
      password: String
      role: String!
      image: String
      confirmed_at: Date
    }
  `,
  query: `
    users: [User]
    user(_id: String!): User
  `,
  mutation: `
    createUser(name: String!, email: String!, password: String!,image: String, role: String!): User
    updateUser(_id: String!, data: UpdateUserData): Int
    deleteUser(_id: String!): Int
  `
}
