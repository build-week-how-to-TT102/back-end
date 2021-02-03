const express = require('express')
const HowTos = require('./howTo-models')
const router = express.Router()
const { restrict } = require("../middleware/restrict");

router.get("/:id", restrict(), async (req, res, next) => {
  try{
    const howtos = await HowTos.find(req.params.id)

    return res.status(200).json(howtos)

  } catch(err) {
    next(err)
  }
})

router.get("/:id/howtos/:howtoID", restrict(), async (req, res, next) => {
  try {
    const howto = await HowTos.findById(req.params.howtoID)

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

router.put("/:id/howtos/:howtoID", restrict(), async (req, res, next) => {
  try {
    const howto = await HowTos.findById(req.params.howtoID)

    if(!howto) {
      return res.status(404).json({
        message: "No How-To with that ID exists"
      })
    }
    // console.log(req.body)
    // if(req.body.steps){
    // updatedSteps = await HowTos.updateSteps(req.params.howtoID, req.body.steps)
    // } 
    const howToData = { title: req.body.title, description: req.body.description }
    const updatedHowto = await HowTos.update(req.params.howtoID, howToData)

    // const newHowto = await HowTos.findById(req.params.howtoID);

    return res.status(200).json(updatedHowto)
  } catch(err) {
    next(err)
  }
})

router.post("/:id", restrict(), async (req, res, next) => {
  try {
    const howto = await HowTos.add({
      title: req.body.title,
      description: req.body.description,
      userId: req.params.id,
      steps: req.body.steps
    })

    return res.status(201).json(howto)
  } catch(err) {
    next(err)
  }
})

router.delete("/:id/howtos/:howtoID", restrict(), async (req, res, next) => {
  try {
    const count = await HowTos.remove(req.params.howtoID)

    if(count > 0) {
      return res.status(200).json({
        message: "How-To has been deleted"
      })
    } else {
      return res.status(404).json({
        message: "The How-To could not be found"
      })
    }
  } catch(err) {
    next(err)
  }
});

module.exports = router