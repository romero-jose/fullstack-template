import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import { errorHandler } from './middleware/errorHandler.js'

const port = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get('/api/health', async (_req, res) => {
  res.send({ status: 'ok' })
})

app.post('/api/echo', async (req, res) => {
  res.status(200).json(req.body)
})

app.use(errorHandler)
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
