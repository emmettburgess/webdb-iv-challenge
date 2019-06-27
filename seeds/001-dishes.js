exports.seed = function(knex, Promise) {
    return knex('dishes')
    .truncate()
      .then(function () {
        return knex('dishes').insert([
          {name: 'Tacos'},
          {name: 'Pizza'},
          {name: 'Sushi'}
        ]);
      });
  };