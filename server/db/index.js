const mongoose = require('mongoose')

module.exports = async () => {
  try {
    await mongoose.connect(
      process.env.DATABASE_URL,
      { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
      () => { console.log('Connected to db...') }
    )
  } catch (err) {
    console.error('Error while connecting to DB')
    console.log(err)
  }
}
