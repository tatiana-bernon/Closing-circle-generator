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
router.get('/finishers/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getFinishers(id)
    .then(finishers => {
      res.json(finishers)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

// POST /api/v1
router.post('/questions', (req, res) => {
  console.log(req)
  const newQuestion = req.body
  db.saveQuestion(newQuestion)
    .then(question => {
      res.json(question)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

// GET /api/v1
router.get('/questions', (req, res) => {  
  db.getQuestions()
    .then(questions => {
      res.json(questions)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router