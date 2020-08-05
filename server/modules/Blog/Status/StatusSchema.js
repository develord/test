module.exports = {
  type: `
    type Status {
      _id: String
      name: String
      desc: String
      created_at: Date
      updated_at: Date
    }

    input UpdateStatusData {
      name: String
      desc: String
    }
  `,
  query: `
    statuses: [Status]
    status(_id: String!): Status
  `,
  mutation: `
    createStatus(name: String, desc: String): Status
    updateStatus(_id: String!, data: UpdateStatusData): Int
    deleteStatus(_id: String!): Int
  `
}
