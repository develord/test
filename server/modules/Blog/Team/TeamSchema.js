module.exports = {
  type: `
    type Team {
      _id: ID!
      name: String!
      title: String!
      degree: [String]
      tags: [Tag]
      image_large: Image
      link: String
      content: String
      email: String
      twitter: String
      cv: String
      google: String
      linkedin: String
      researchgate: String
      github: String
      created_at: Date
      updated_at: Date
    }
  `,
  query: `
    teams: [Team]
    team(_id: String): Team
  `,
  mutation: `
    createTeam(
      name: String!
      title: String!
      degree: [String]
      tags: [String]
      image_large: String
      content: String
      email: String
      twitter: String
      cv: String
      google: String
      linkedin: String
      researchgate: String
      github: String
    ): Team
    updateTeam(
      _id: String!
      name: String!
      title: String!
      degree: [String]
      tags: [String]
      image_large: String
      content: String
      email: String
      twitter: String
      cv: String
      google: String
      linkedin: String
      researchgate: String
      github: String
    ): Int
    deleteTeam(_id: String!): Int
  `
}
