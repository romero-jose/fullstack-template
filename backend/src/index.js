import 'dotenv/config'
import express from 'express'

const app = express()
const port = 3000

app.get('/api/health', async (_req, res) => {
  res.send({ status: 'ok' })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
