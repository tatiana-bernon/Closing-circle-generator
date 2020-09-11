const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getStarters,
  getFinishers,
  saveQuestion
}

function getStarters (db = connection) {
  return db('starters')
    .select()
}

function getFinishers (id, db = connection) {
  return db('finishers')
    .where('starter_id', id)
    .select()
}

function saveQuestion (newQuestion, db = connection) {
  return db('questions')
    .insert(newQuestion)
}

function getQuestions (db = connection) {
  return db('questions')
    .select()
}
