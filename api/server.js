const express = require("express")
const cors = require("cors")
const helmet = require('helmet')

const authRouter = require('./auth/auth-routers')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use('/api/auth', authRouter)

server.use("/", (req, res, next) => {
  res.status(200).json({
    message: "Welcome to the Server"
  })
})

module.exports = server