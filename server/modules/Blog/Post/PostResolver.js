const Category = require('../Category')
const Post = require('.')
/**
 * User Queries
 * - categories: [User]
 * - user: User
 */
const Query = {
  posts: async () => {
    const posts = await Post.find().populate(['user', 'category', 'status', 'image_large', 'image_small'])
    return posts
  },
  post: (_, { _id }) => {
    return Post.findOne({ _id }).populate(['user', 'category', 'status', 'image_large', 'image_small'])
  },
  page: (_, { link }) => {
    if (!link.includes('/', 1)) {
      return Category.findOne({ link })
    } else {
      link = link.replace('/', '')
      return Post.findOne({ link }).populate(['user', 'category', 'status', 'image_large', 'image_small'])
    }
  }
}

/**
 * User Mutations
 * - addUser: [User]
 * - updateUser: Int (number of items updated)
 * - deleteUser: Int (number of items deleted)
 */
const Mutation = {
  // eslint-disable-next-line camelcase
  createPost: async (_, { title, description, h1, content, componentName, image_large, image_small, link, user, category, status }) => {
    const postData = { title, description, h1, componentName, content, image_large, image_small, link, user, category, status }
    const post = await new Post(postData)
    return post.save()
  },
  // eslint-disable-next-line camelcase
  updatePost: async (_, { _id, title, description, h1, content, image_large, image_small, link, user, category, status }) => {
    // if we need to validate more, we destruct the args.data object (fields to update)

    /** We can make more validation here **/
    // it's better to pass a single object to updateOne to avoid checking on undefined
    const data = { title, description, h1, content, image_large, image_small, link, user, category, status }
    const updated = await Post.findOneAndUpdate({ _id }, data, {
      new: true
    })
    return updated.n
  },
  deletePost: async (_, { _id }) => {
    const removed = await Post.deleteOne({ _id })
    return removed.deletedCount
  }
}

/** Exports **/
module.exports = { Query, Mutation }
