
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('finishers').del()
    .then(function () {
      // Inserts seed entries
      return knex('finishers').insert([
        {id: 1, starter_id: 1, finisher: 'how far could you swim?'},
        {id: 2, starter_id: 1, finisher: 'what would you eat for breakfast?'},
        {id: 3, starter_id: 1, finisher: 'what would your nickname be?'},
        {id: 4, starter_id: 1, finisher: 'what would your day job be?'},
      ])
    })
}
