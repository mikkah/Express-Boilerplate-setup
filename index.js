import express from 'express'

const app = express()
const port = 3010

app.get('/', (req, res) => {
  res.send('Hello World Express')
})

app.listen(port, () => {
  console.log(`Express App Listening on port ${port}`)
})