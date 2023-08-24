import express from 'express'
import storeRoutes from './routes/storeRoutes'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:3000',
  allowedHeaders: '*',
}))

app.use('/store', storeRoutes)

app.use((error, req, res, next) => {
  if (!error.statusCode) error.statusCode = 500

  if (error.statusCode === 401) {
    res.status(error.statusCode).send(error.message)
  }

  res.status(error.statusCode).send('Something broke!')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000!')
})