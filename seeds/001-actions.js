exports.seed = async function(knex) {
  await knex("actions").insert([
    {
      id: 4,
      description: "more descriptive properties",
      notes: "blue",
      complete: true,
      project_id: 2
    }
  ]);
};
