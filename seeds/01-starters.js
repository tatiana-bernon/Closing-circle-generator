
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('starters').del()
    .then(function () {
      // Inserts seed entries
      return knex('starters').insert(
        { id: 1, starter: 'If you were a ' },
        { id: 2, starter: 'If your spirit animal was a' },
        { id: 3, starter: 'If you dreamt of being a' }
      )
    })
}
