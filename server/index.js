const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3001
const app = express()
const router = require('./router')
const errorHandler = require('./error')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '..', 'dist')))
app.use('/hero', router)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})