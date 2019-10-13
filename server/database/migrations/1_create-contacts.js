exports.up = function(knex) {
  return knex.schema.createTable("contacts", table => {
    table
      .increments()
      .notNullable()
      .unique();
    table.string("name").notNullable();
    table.string("address");
    table.string("mobile");
    table.string("work");
    table.string("home");
    table.string("email");
    table.string("twitter");
    table.string("instagram");
    table.string("github");
    table.integer("created_by").references("users.id");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("contacts");
};
