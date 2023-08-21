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

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000!')
})