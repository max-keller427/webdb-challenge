exports.up = async function(knex) {
  await knex.schema.createTable("projects", tbl => {
    tbl.increments();
    tbl
      .string("name")
      .unique()
      .notNullable();
    tbl.string("description").notNullable();
    tbl.boolean("complete");
  });

  await knex.schema.createTable("actions", tbl => {
    tbl.increments();
    tbl.string("description").notNullable();
    tbl.string("notes");
    tbl.boolean("complete");

    tbl
      .integer("project_id")
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("actions");
  await knex.schema.dropTableIfExists("projects");
};
