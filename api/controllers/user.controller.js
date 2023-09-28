const User = require('../models/user.model')

async function getAllUsers(req, res) {
  try {
    const users = await User.findAll()
    res.json(users)
  } catch (error) {
    console.log(error)
  }
}

async function getProfile(req, res) {
  try {
    const user = await User.findByPk(res.locals.user.id)
    res.status(200).json(user)
  } catch (error) {
    res.json(error)
  }
}

module.exports = {
  getAllUsers,
  getProfile
}