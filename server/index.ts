import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'

import router from './routes/index'

dotenv.config()

mongoose
  .connect(
    `mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.y2gjitm.mongodb.net/pizza?retryWrites=true&w=majority`,
  )
  .then(() => console.log('Succsess conecting to DB. OK!'))
  .catch((error) => console.log('Error conecting to DB', error))

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server have started on port ${port}`)
})
