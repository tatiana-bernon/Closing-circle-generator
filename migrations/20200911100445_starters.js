
exports.up = (knex) => {
  return knex.schema.createTable('starters', table => {
    table.increments('id').primary()
    table.string('starter')
  })
  
}

exports.down = (knex) => {
  return knex.schema.dropTable('starters')
}
