import express, { NextFunction, Request, Response } from 'express'
import storeRoutes from './routes/storeRoutes'
import cors from 'cors'

export class AppError extends Error {
  statusCode: number
  constructor(message: string, statusCode: number) {
    super(message)

    this.name = Error.name
    this.statusCode = statusCode
  }
}

const app = express()
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:3000',
  allowedHeaders: '*',
}))

app.use('/store', storeRoutes)

app.use((error: AppError, req: Request, res: Response, next: NextFunction) => {
  if (!error.statusCode) error.statusCode = 500

  if (error.statusCode === 400) {
    return res.status(error.statusCode).send(error.message)
  }

  return res.status(error.statusCode).send('Something broke!')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000!')
})