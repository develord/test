module.exports = {
  type: `
    type Contact {
      _id: ID!
      location: String
      mail: String
      tel: String
      content: String
      created_at: Date
      updated_at: Date
    }
  `,
  query: `
  contact: [Contact]
  `,
  mutation: `
  createContact(location: String, mail: String, tel: String, content: String): Contact
  updateContact(_id: String!, location: String, mail: String, tel: String, content: String): Int
  `
}
