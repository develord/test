const Status = require('.')

/**
 * Status Queries
 * - status: [Status]
 * - Status: Status
 */
const Query = {
  statuses: () => Status.find(),
  status: (_, args) => Status.findOne({ _id: args._id })
}

/**
 * Status Mutations
 * - addStatus: [Status]
 * - updateStatus: Int (number of items updated)
 * - deleteStatus: Int (number of items deleted)
 */
const Mutation = {
  createStatus: async (_, args) => {
    const status = await new Status({ name: args.name, desc: args.desc })
    return status.save()
  },
  updateStatus: async (_, args) => {
    const { _id } = args._id
    const { name, desc } = args.data
    /** Make more validation **/
    const data = { name, desc }
    const updated = await Status.updateOne(_id, data)
    return updated.n
  },
  deleteStatus: async (_, args) => {
    const removed = await Status.deleteOne({ _id: args._id })
    return removed.deletedCount
  }
}

/** Exports **/
module.exports = { Query, Mutation }
