const Post = require('.')
/**
 * User Queries
 * - categories: [User]
 * - user: User
 */
const Query = {
  posts: async () => {
    const posts = await Post.find().populate(['user', 'category', 'status'])

    return posts
  },
  post: (_, { _id }) => {
    return Post.findOne({ _id }).populate(['user', 'category', 'status'])
  }
}

/**
 * User Mutations
 * - addUser: [User]
 * - updateUser: Int (number of items updated)
 * - deleteUser: Int (number of items deleted)
 */
const Mutation = {
  createPost: async (_, { title, description, h1, content, image_large, image_small, link, user, category, status }) => {
    const postData = { title, description, h1, content, image_large, image_small, link, user, category, status }
    const post = await new Post(postData)
    return post.save()
  },
  updatePost: async (_, args) => {
    const { _id } = args
    // if we need to validate more, we destruct the args.data object (fields to update)
    const { title, description, h1, content, image_large, image_small, link, user, category, status } = args.data

    /** We can make more validation here **/

    // it's better to pass a single object to updateOne to avoid checking on undefined
    const data = { title, description, h1, content, image_large, image_small, link, user, category, status }
    const updated = await Post.updateOne({ _id }, { data })
    return updated.n
  },
  deletePost: async (_, { _id }) => {
    const removed = await Post.deleteOne({ _id })
    return removed.deletedCount
  }
}

/** Exports **/
module.exports = { Query, Mutation }
