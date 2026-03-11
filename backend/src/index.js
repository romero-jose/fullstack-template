import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const port = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(morgan('dev'))

app.get('/api/health', async (_req, res) => {
  res.send({ status: 'ok' })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
