// const {
// ApolloError,
// toApolloError,
// ValidationError,
// AuthenticationError
// ForbiddenError,
// UserInputError
// } = require('apollo-server-express')
const helpers = require('../../../../helpers/slugify')
const Post = require('./../Post')
const Category = require('.')
/**
 * Category Queries
 * - categories: [Category]
 * - category: Category
 */
const Query = {
  categories: (_, args, context) => {
    // if (!context.auth) { throw new AuthenticationError('AuthenticationError: not token provided') }
    const listCategory = Category.find().populate(['user', 'tags', 'status', 'image_large', 'image_small'])
    return listCategory
  },
  category: (_, { _id }) => Category.findOne({ _id }),
  categoryElements: async (_, { link, nb }) => {
    if (!nb) {
      const cat = await Category.findOne({ link })
      if (cat) {
        const posts = await Post.find({ 'category': cat._id }).populate(['user', 'category', 'tags', 'status', 'image_large', 'image_small']).sort({ created_at: 1 }).limit(4)
        return posts
      }
    } else {
      const cat = await Category.findOne({ link })
      if (cat) {
        const n = await Post.find({ 'category': cat._id }).count()
        const posts = await Post.find({ 'category': cat._id }).populate(['user', 'category', 'tags', 'status', 'image_large', 'image_small']).limit(nb).skip(n - 5).sort({ created_at: 1 })
        return posts
      }
    }
  }
}

/**
 * Category Mutations
 * - addCategory: [Category]
 * - updateCategory: Int (number of items updated)
 * - deleteCategory: Int (number of items deleted)
 */
const Mutation = {
  // eslint-disable-next-line camelcase
  createCategory: async (_, { title, name, description, componentName, h1, user, status, content, image_large, image_small }) => {
    const link = helpers.slugify(name)
    const postData = { title, name, description, h1, content, componentName, image_large, image_small, link, user, status }
    const category = await new Category(postData).populate(['user', 'status', 'image_large', 'image_small'])
    return category.save()
  },
  // eslint-disable-next-line camelcase
  updateCategory: async (_, { _id, title, name, description, componentName, h1, user, status, content, image_large, image_small }) => {
    /** Make more validation **/
    const link = helpers.slugify(name)
    const data = { title, name, description, componentName, h1, user, status, content, image_large, image_small, link }
    const updated = await Category.findOneAndUpdate({ _id }, data, {
      new: true
    })
    return updated.n
  },
  deleteCategory: async (_, args) => {
    const removed = await Category.deleteOne({ _id: args._id })
    return removed.deletedCount
  }
}

/** Exports **/
module.exports = { Query, Mutation }
