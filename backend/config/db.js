import mongoose from 'mongoose'

const connectdb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`Mongo connect ${conn.connection.host}`.cyan.bold)
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold)
    process.exit(1)
  }
}

export default connectdb
