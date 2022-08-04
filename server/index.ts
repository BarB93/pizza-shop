import express, { Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(express.json())
const port = process.env.PORT || 5000

app.get('/', (req: Request, res: Response) => {
  res.send('Server working')
})

app.listen(port, () => {
  console.log(`Server have started on port ${port}`)
})
