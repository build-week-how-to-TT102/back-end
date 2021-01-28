const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Users = require('./auth-models')
const router = express.Router()

router.post('/register', async (req, res, next) => {
  try {
    const { username, password, email } = req.body

    if(!username || !password) {
      return res.status(401).json({
        message: "username and password are required"
      })
    }

    const user = await Users.findByUsername(username)

    if(user) {
      return res.status(409).json({
        message: "This username is already taken"
      })
    }

    const newUser = await Users.add({
      username,
      email,
      password: await bcrypt.hash(password, 14)
    })

    res.status(201).json(newUser)

  } catch(err) {
    next(err)
  }
})

module.exports = router