import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import connectdb from './config/db.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectdb()

const app = express()

app.get('/', (req, res) => {
  res.send('APi is running')
})

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server is running on ${PORT} and mode ${process.env.NODE_ENV}`.yellow.bold
  )
)
