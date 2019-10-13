exports.up = function(knex) {
  return knex.schema.createTable("users", table => {
    table
      .increments()
      .notNullable()
      .unique();
    table
      .string("username")
      .notNullable()
      .unique();
    table.string("name");
    table.string("email");
    table.string("address");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
