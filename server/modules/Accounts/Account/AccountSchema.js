module.exports = {
  type: `
    type Address {
      street: String
      postCode: String
      city: String
      state: String
      country: String
    }
    type Holder {
      name: String
      type: String
      address: Address
    }
    type HolderBank {
      bic: String
      clearingCodeType: String
      clearingCode: String
      name: String
      address: Address
    }
    type Account {
      id: String!
      currency: String
      accountNumber: String
      correspondentBank: String
      amount: String
      holderBank: HolderBank!
      holder: Holder!
    }
  `,
  query: `
    accounts: [Account]
  `,
  mutation: `
    
  `
}
