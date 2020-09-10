
exports.up = (knex) => {
  return knex.schema.createTable('finishers', table => {
    table.increments('id')
    table.integer('starter_id')
    table.string('finisher')
  })
  
}

exports.down = (knex) => {
  return knex.schema.dropTable('finishers')
}
