const path = require('path')
const { createWriteStream, unlinkSync } = require('fs')
const webp = require('webp-converter')
const Image = require('.')
/**
 * Images Queries
 */
const Query = {
  images: async () => {
    const image = await Image.find()
    return image
  }
}

/**
 * Images Mutations
 * - addUser: [User]
 */
const Mutation = {
  async uploadFile (_, { file }) {
    const { createReadStream, filename, mimetype, encoding } = await file
    // 1. Stream file contents into cloud storage:
    // https://nodejs.org/api/stream.html

    // Save file and create the low img and convert to webp
    await
    createReadStream()
      .pipe(
        createWriteStream(
          path.join(__dirname, '../../../../assets/images', filename)
        )
      )
    // 3. Compress the image.
    // and create the low placehoholder
    await webp.cwebp(path.join(__dirname, '../../../../assets/images', filename), path.join(__dirname, '../../../../assets/images', `${filename.split('.')[0]}-high.webp`), '-q 90')
    // await webp.cwebp(path.join(__dirname, '../../../../assets/images', filename), path.join(__dirname, '../../../../assets/images', `${filename.split('.')[0]}-low.webp`), '-q 30')
    // 2. Record the file upload in your DB.
    unlinkSync(path.join(__dirname, '../../../../assets/images', filename))
    const image = await new Image({
      low: `${filename.split('.')[0]}-low.webp`,
      high: `${filename.split('.')[0]}-high.webp`
    })
    image.save()
    return { filename, mimetype, encoding }
  },
  deleteImage: async (_, { _id }) => {
    const removed = await Image.deleteOne({ _id })
    return removed.deletedCount
  }
}

/** Exports **/
module.exports = { Query, Mutation }
