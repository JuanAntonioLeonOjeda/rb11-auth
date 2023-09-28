const router = require('express').Router()

const {
  checkAuth,
  checkAdmin
} = require('../middlewares')

const {
  getAllUsers,
  getProfile
} = require('../controllers/user.controller')

router.get('/', checkAuth, checkAdmin, getAllUsers)
router.get('/profile', checkAuth, getProfile)

module.exports = router