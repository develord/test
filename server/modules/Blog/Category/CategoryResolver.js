const { ApolloError, toApolloError, ValidationError, AuthenticationError, ForbiddenError, UserInputError } = require('apollo-server-express')
const Category = require('.')
/**
 * Category Queries
 * - categories: [Category]
 * - category: Category
 */
const Query = {
  categories: (_, args, context) => {
    if (!context.auth) { throw new AuthenticationError('AuthenticationError: not token provided') }
    const listCategorie = Category.find()
    return listCategorie
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
  createCategory: async (_, args, context) => {
    const category = await new Category({
      name: args.name,
      title: args.title,
      description: args.description,
      h1: args.h1,
      content: args.content,
      image_large: args.image_large,
      image_small: args.image_small,
      link: args.link
    })
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
