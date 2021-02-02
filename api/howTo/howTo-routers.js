const express = require('express')
const HowTos = require('./howTo-models')
const router = express.Router()
const { restrict } = require("../middleware/restrict");

router.get("/", restrict(), async (req, res, next) => {
  try{
    const howtos = await HowTos.find()

    return res.status(200).json(howtos)

  } catch(err) {
    next(err)
  }
})

router.get("/:id", restrict(), async (req, res, next) => {
  try {
    const howto = await HowTos.findById(req.params.id)

    if(!howto) {
      return res.status(404).json({
        message: "No How-To with that ID exists"
      })
    }

    return res.status(200).json(howto)
  } catch(err) {
    next(err)
  }
})

module.exports = router