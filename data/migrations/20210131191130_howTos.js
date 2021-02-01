
exports.up = function(knex) {
  return knex.schema.createTable('howtos', howto => {
    howto.increments()
    howto.string("title", 255).notNullable().unique()
    howto.string("description", 255).notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('howtos')
};
