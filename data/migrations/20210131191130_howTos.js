
exports.up = async function(knex) {
  await knex.schema.createTable('howtos', howto => {
    howto.increments()
    howto.string("title", 255).notNullable().unique()
    howto.string("description", 255).notNullable()
    howto.integer("userId")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
  })

  await knex.schema.createTable('steps', step => {
    step.increments()
    step.string("description").notNullable()
    step.integer("step_number")
    step.integer("howtoId")
      .notNullable()
      .references("id")
      .inTable("howtos")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('steps')
  await knex.schema.dropTableIfExists('howtos')
};
