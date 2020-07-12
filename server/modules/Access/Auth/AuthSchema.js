module.exports = {
  type: ``,
  query: ``,
  mutation: `
    register(name: String!, email: String!, password: String!, role: String!, image: String ): User!
    login(email: String!, password: String!): String!
  `
}
