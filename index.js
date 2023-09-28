const express = require('express')
const morgan = require('morgan')

const {
  checkDB,
  syncModels
} = require('./database/index')

const User = require('./api/models/user.model')

const connectToDB = async () => {
  await checkDB()
  await syncModels()
}

const startExpress = () => {
  const app = express()
  app.use(express.json())
  app.use(morgan('dev'))
  
  app.use('/api', require('./api/routes'))

  app.listen(3000, () => {
    console.log('Listening on port 3000')
  })
}

const start = async() => {
  await connectToDB()
  startExpress()
}

start()