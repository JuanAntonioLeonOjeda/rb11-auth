const jwt = require('jsonwebtoken')

const User = require('../models/user.model')

const checkAuth = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(404).send('No Token found')
  }

  jwt.verify(req.headers.authorization, 'ItsASecretToEveryBody', async (err, result) => {
    if (err) return res.send('Token not valid')

    const user = await User.findOne({
      where: {
        email: result.email
      }
    })

    res.locals.user = user
    next()
  })
}

function checkAdmin(req, res, next) {
  if (res.locals.user.role !== 'admin') {
    return res.status(401).send('User not authorized')  // Return error for any role different from 'admin'
  } else {
    next()  // If the user has 'admin' role, we let him access the following function in the route.
  }
}

module.exports = {
  checkAuth,
  checkAdmin
}