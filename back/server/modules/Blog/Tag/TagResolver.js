const Tag = require('.')
/**
 * Images Queries
 */
const Query = {
  tags: async () => {
    const tags = await Tag.find()
    return tags
  },
  tag: async (_, { _id }) => {
    const tag = await Tag.findOne({ _id }).populate(['image'])
    return tag
  }
}

/**
 * Images Mutations
 * - addUser: [User]
 */

const Mutation = {
  createTag: async (_, { name, slug, image }) => {
    const tagData = { name, slug, image }
    const tag = await new Tag(tagData)
    return tag.save()
  },
  updateTag: async (_, { _id, name, image, slug }) => {
    // if we need to validate more, we destruct the args.data object (fields to update)
    /** We can make more validation here **/
    // it's better to pass a single object to updateOne to avoid checking on undefined
    const data = { name, slug, image }
    const updated = await Tag.findOneAndUpdate({ _id }, data, {
      new: true
    })
    return updated.n
  },
  deleteTag: async (_, { _id }) => {
    const removed = await Tag.deleteOne({ _id })
    return removed.deletedCount
  }
}

/** Exports **/
module.exports = { Query, Mutation }
