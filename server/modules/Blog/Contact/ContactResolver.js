const Contact = require('.')
/**
 * Images Queries
 */
const Query = {
  contact: async () => {
    const tags = await Contact.find()
    return tags
  }
}

/**
 * Images Mutations
 * - addUser: [User]
 */

const Mutation = {
  createContact: async (_, { location, mail, tel, content }) => {
    const tagData = { location, mail, tel, content }
    const contact = await new Contact(tagData)
    return contact.save()
  },
  updateContact: async (_, { _id, location, mail, tel, content }) => {
    // if we need to validate more, we destruct the args.data object (fields to update)
    /** We can make more validation here **/
    // it's better to pass a single object to updateOne to avoid checking on undefined
    const data = { location, mail, tel, content }
    const updated = await Contact.findOneAndUpdate({ _id }, data, {
      new: true
    })
    return updated.n
  }
}

/** Exports **/
module.exports = { Query, Mutation }
