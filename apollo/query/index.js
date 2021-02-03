const categories = require('./categories.gql')
const posts = require('./posts.gql')
const statuses = require('./statuses.gql')
const images = require('./images.gql')
const page = require('./page.gql')
const categoryElements = require('./categoryElements.gql')
const tags = require('./tags.gql')
const tagById = require('./tag.gql')
const postById = require('./post.gql')
const teams = require('./teams.gql')
const teamById = require('./teams.gql')
const contact = require('./contact.gql')

module.exports = { contact, teams, tagById, teamById, categories, posts, postById, statuses, images, page, categoryElements, tags }
