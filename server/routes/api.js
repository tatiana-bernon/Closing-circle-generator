const express = require('express')
const router = express.Router()

const db = require('../db/db')

// GET /api/v1
router.get('/starters', (req, res) => {
  db.getStarters()
    .then(starters => {
      res.json(starters)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

// GET /api/v1
router.get('/finishers', (req, res) => {
  db.getFinishers()
    .then(finishers => {
      res.json(finishers)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})