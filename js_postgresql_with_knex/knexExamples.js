const knex = require("./db/client");

// Exercise: Inserting Posts
knex
  .insert([
    { title: "Top 5 Programming Languages", content: "PHP and stuff" },
    { title: "Top 10 Hikes", content: "The Grind and stuff" },
    { title: "You wouldn't believe...", content: "Yeah..." }
  ])
  .into("posts")
  .returning("*")
  .then(data => {
    console.log(data);
    knex.destroy(); // Closes connection to db
  });
