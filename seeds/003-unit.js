exports.seed = function(knex, Promise) {
    return knex('unit_type')
    .truncate()
      .then(function () {
        return knex('unit_type').insert([
          {name: 'Kilogram'},
          {name: 'Box'},
          {name: 'Piece'}
        ]);
      });
  };