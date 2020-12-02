/* eslint-disable no-console */
const mongoose = require('mongoose')

module.exports = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://dbUser:12345678A@cluster0-9lc8h.mongodb.net/test?retryWrites=true&w=majority',
      { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false },
      () => { console.log('\n Connected to db...') }
    )
  } catch (err) {
    console.error('Error while connecting to DB')
    console.log(err)
  }
}
