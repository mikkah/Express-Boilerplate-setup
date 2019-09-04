import express from 'express'
import routes from './api'
import './db'
import consola from 'consola'

const app = express()
const port = process.env.PORT

app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Hello World Express')
})

app.listen(port, () => {
  consola.success(`Express App Listening on port ${port}`)
})