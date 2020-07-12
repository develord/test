const mongoose = require('mongoose')

module.exports = async () => {
  try {
    await mongoose.connect(
      process.env.DATABASE_URL,
      { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
      () => { console.log('DB is Connected') }
    )
  } catch (err) {
    console.error('Error while connecting to DB')
    console.log(err)
  }
}
