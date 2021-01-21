const categories = require('./categories.gql')
const posts = require('./posts.gql')
const statuses = require('./statuses.gql')
const images = require('./images.gql')
const page = require('./page.gql')
const categoryElements = require('./categoryElements.gql')
const tags = require('./tags.gql')
const postById = require('./post.gql')

module.exports = { categories, posts, postById, statuses, images, page, categoryElements, tags }
