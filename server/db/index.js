/* eslint-disable no-console */
const mongoose = require('mongoose')

module.exports = async () => {
  try {
    console.log(process.env.DATABASE_URL)
    await mongoose.connect(
      process.env.DATABASE_URL,
      { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false },
      () => { console.log('\n Connected to db...') }
    )
  } catch (err) {
    console.error('Error while connecting to DB')
    console.log(err)
  }
}
