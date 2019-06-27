exports.seed = function(knex, Promise) {
    return knex('recipe_ingredients')
    .truncate()
      .then(function () {
        return knex('recipe_ingredients').insert([
          {recipe_id: 1, ingredient_id: 1, measurement: 3.14, unit_id: 3},
          {recipe_id: 2, ingredient_id: 2, measurement: 3.145, unit_id: 3},
          {recipe_id: 3, ingredient_id: 3, measurement: 3.1456, unit_id: 3}
        ]);
      });
  };