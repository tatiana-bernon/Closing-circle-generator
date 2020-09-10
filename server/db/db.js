const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getStarters,
  getFinishers
}

function getStarters () {
  return db('starters')
    .select()
}

function getFinishers (id) {
  return db('finishers')
    .where('starter_id', id)
    .select()
}
