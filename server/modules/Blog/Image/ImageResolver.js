const path = require('path')
const { createWriteStream, unlinkSync } = require('fs')
const webp = require('webp-converter')
const Jimp = require('jimp')
const Image = require('.')
webp.grant_permission()
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
    const { filename, mimetype, createReadStream, encoding } = await file
    /* await createReadStream()
      .pipe(
        createWriteStream(
          path.join(__dirname, '../../../../static/images', filename)
        )
      ) */
    const stream = createReadStream()
    await new Promise((resolve, reject) => {
      stream.on('error', (error) => {
        unlinkSync(path, () => {
          reject(error)
        })
      }).pipe(createWriteStream(path.join(__dirname, '../../../../static/images', filename)))
        .on('error', reject)
        .on('finish', resolve)
    })
    try {
      // setTimeout(async () => {
      const img = `./static/images/${filename}`
      const black = await Jimp.read(img)
      await black.quality(20).greyscale().blur(15).writeAsync(`./static/images/low-${filename}`)
      /* Jimp.read(img, (err, lenna) => {
        if (err) {
          console.error('**********', err)
          throw err
        }
        lenna
          .quality(20) // set JPEG quality
          .greyscale() // set greyscale
          .blur(15)
          .write(`./static/images/low-${filename}`) // save
      }) */

      await webp.cwebp(path.join(__dirname, '../../../../static/images', filename), path.join(__dirname, '../../../../static/images', `${filename.split('.')[0]}-high.webp`))
      await webp.cwebp(path.join(__dirname, '../../../../static/images', `low-${filename}`), path.join(__dirname, '../../../../static/images', `${filename.split('.')[0]}-low.webp`))
      await unlinkSync(path.join(__dirname, '../../../../static/images', filename))
      await unlinkSync(path.join(__dirname, '../../../../static/images', `low-${filename}`))
      const image = new Image({
        low: `${filename.split('.')[0]}-low.webp`,
        high: `${filename.split('.')[0]}-high.webp`
      })
      await image.save()
      // }, 3000)
    } catch (e) { console.error('^========>', e) }
    return { filename, mimetype, encoding }
  },
  deleteImage: async (_, { _id }) => {
    const removed = await Image.deleteOne({ _id })
    return removed.deletedCount
  }
}

/** Exports **/
module.exports = { Query, Mutation }
