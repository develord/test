const Category = require('../Category')
const Post = require('.')
/**
 * User Queries
 * - categories: [User]
 * - user: User
 */
const Query = {
  posts: async () => {
    const posts = await Post.find().populate(['user', 'gallery', 'category', 'status', 'image_large', 'image_small', 'tags'])
    return posts
  },
  post: (_, { _id }) => {
    return Post.findOne({ _id }).populate(['user', 'gallery', 'category', 'status', 'image_large', 'image_small', 'tags'])
  },
  page: async (_, { link }) => {
    link = link.substring(1)
    if (!link.includes('/')) {
      return Category.findOne({ link }).populate(['user', 'status', 'image_large', 'image_small'])
    } else {
      const post = await Post.findOne({ link }).populate(['user', 'gallery', 'tags', 'status', 'image_large', 'image_small'])
      return post
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
  createPost: async (_, { title, tags, gallery, description, h1, content, componentName, image_large, image_small, link, user, category, status }) => {
    const postData = { title, tags, description, gallery, h1, componentName, content, image_large, image_small, link, user, category, status }
    const post = await new Post(postData)
    return post.save()
  },
  // eslint-disable-next-line camelcase
  updatePost: async (_, { _id, tags, title, gallery, description, h1, content, componentName, image_large, image_small, link, user, category, status }) => {
    // if we need to validate more, we destruct the args.data object (fields to update)
    /** We can make more validation here **/
    console.log(gallery)
    // it's better to pass a single object to updateOne to avoid checking on undefined
    const data = { title, description, tags, h1, gallery, content, componentName, image_large, image_small, link, user, category, status }
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
