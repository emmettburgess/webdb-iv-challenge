exports.seed = function(knex, Promise) {
    return knex('recipes')
    .truncate()
      .then(function () {
        return knex('recipes').insert([
          {name: 'Teeny Tacos', dish_id: 1 },
          {name: 'Pickled Pizza', dish_id: 2 },
          {name: 'Salami Sushi', dish_id: 3 }
        ]);
      });
  };