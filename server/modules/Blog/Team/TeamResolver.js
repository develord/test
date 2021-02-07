const Team = require('.')
/**
 * User Queries
 * - categories: [User]
 * - user: User
 */
const slug = (text) => {
  const from = 'ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;'
  const to = 'aaaaaeeeeeiiiiooooouuuunc------'
  const newText = text.split('').map(
    (letter, i) => letter.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i)))
  return newText
    .toString() // Cast to string
    .toLowerCase() // Convert the string to lowercase letters
    .trim() // Remove whitespace from both sides of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-y-') // Replace & with 'and'
    .replace(/[^\w\\-]+/g, '') // Remove all non-word chars
    .replace(/\\-\\-+/g, '-') // Replace multiple - with single -
}

const Query = {
  teams: async () => {
    const teams = await Team.find().populate(['image_large', 'tags'])
    return teams
  },
  team: async (_, { _id }) => {
    const team = await Team.findOne({ _id }).populate(['image_large', 'tags'])
    return team
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
  createTeam: async (_, { name, title, degree, tags, image_large, content, email, twitter, cv, google, linkedin, researchgate, github }) => {
    const teamData = { name, title, link: slug(name), degree, tags, image_large, content, email, twitter, cv, google, linkedin, researchgate, github }
    const team = await new Team(teamData)
    return team.save()
  },
  // eslint-disable-next-line camelcase
  updateTeam: async (_, { _id, name, title, degree, tags, image_large, content, email, twitter, cv, google, linkedin, researchgate, github }) => {
    // if we need to validate more, we destruct the args.data object (fields to update)
    /** We can make more validation here **/
    // it's better to pass a single object to updateOne to avoid checking on undefined
    const data = { name, title, degree, tags, image_large, content, email, twitter, cv, google, linkedin, researchgate, github }
    const updated = await Team.findOneAndUpdate({ _id }, data, {
      new: true
    })
    return updated.n
  },
  deleteTeam: async (_, { _id }) => {
    const removed = await Team.deleteOne({ _id })
    return removed.deletedCount
  }
}

/** Exports **/
module.exports = { Query, Mutation }
