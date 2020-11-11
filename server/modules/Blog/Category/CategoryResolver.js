// const {
// ApolloError,
// toApolloError,
// ValidationError,
// AuthenticationError
// ForbiddenError,
// UserInputError
// } = require('apollo-server-express')
const Category = require('.')
/**
 * Category Queries
 * - categories: [Category]
 * - category: Category
 */
const Query = {
  categories: (_, args, context) => {
    // if (!context.auth) { throw new AuthenticationError('AuthenticationError: not token provided') }
    const listCategory = Category.find()
    return listCategory
  },
  category: (_, { _id }) => Category.findOne({ _id })
}

/**
 * Category Mutations
 * - addCategory: [Category]
 * - updateCategory: Int (number of items updated)
 * - deleteCategory: Int (number of items deleted)
 */
const Mutation = {
  // eslint-disable-next-line camelcase
  createCategory: async (_, { title, name, description, componentName, h1, content, image_large, image_small, link }) => {
    const postData = { title, name, description, h1, content, componentName, image_large, image_small, link }
    const category = await new Category(postData)
    return category.save()
  },
  updateCategory: async (_, args) => {
    const { _id } = args._id
    const { name, desc } = args.data
    /** Make more validation **/
    const data = { name, desc }
    const updated = await Category.updateOne(_id, data)
    return updated.n
  },
  deleteCategory: async (_, args) => {
    const removed = await Category.deleteOne({ _id: args._id })
    return removed.deletedCount
  }
}

/** Exports **/
module.exports = { Query, Mutation }
