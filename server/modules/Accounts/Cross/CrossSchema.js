module.exports = {
  type: `
      type Cross {
        instrument: String
        type: String
      }
      type Rate {
        instrument: String
        rate: Float
      }
    `,
  query: `
      cross: [Cross]
    `,
  mutation: `
      getRate(instrument: String!): Rate
    `
}
