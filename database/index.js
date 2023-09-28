const { Sequelize } = require('sequelize')

const connection = new Sequelize('auth', 'juanan', 'Puffin_88', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
})

const checkDB = async () => {
  try {
    await connection.authenticate()
    console.log('Connected to DB :D')
  } catch (error) {
    console.log(error)
  }
}

async function syncModels () {
  try {
    await connection.sync()
    console.log('Models synchronized')
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  connection,
  checkDB,
  syncModels
}

