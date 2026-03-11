import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'

const port = process.env.PORT || 3000

const app = express()

app.use(morgan('dev'))

app.get('/api/health', async (_req, res) => {
  res.send({ status: 'ok' })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
