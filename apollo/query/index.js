const permissions = require('./permissions.gql')
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
const teamById = require('./team.gql')
const contact = require('./contact.gql')
const permission = require('./permission.gql')
const role = require('./role.gql')
const roles = require('./roles.gql')
const user = require('./user.gql')
const users = require('./users.gql')

module.exports = { user, users, role, roles, contact, permissions, permission, teams, tagById, teamById, categories, posts, postById, statuses, images, page, categoryElements, tags }
