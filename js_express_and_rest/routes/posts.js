const express = require("express");
const router = express.Router();
const knex = require("../db/client");

// posts#new -> GET /posts/new
router.get("/new", (req, res) => {
  res.render("posts/new");
});

// posts#create -> POST /posts
router.post("/", (req, res) => {
  // const imageUrl = req.body.imageUrl;
  // const title = req.body.title;
  // const content = req.body.content;
  // 👇 syntax sugar for 👆
  // Object destructuring
  const { imageUrl, title, content } = req.body;

  knex("posts")
    // .insert({
    //   imageUrl: imageUrl,
    //   title: title,
    //   content: content
    // })
    // 👇 syntax sugar for 👆
    // When the name of key is the name as the variable
    // that assigned to that key, you can use object
    // short-hand property syntax.
    .insert({
      imageUrl,
      title,
      content
    })
    .returning("id")
    // Use `returning` this to get the `id` of the post that
    // was just created
    .then(([id]) => {
      res.redirect(`/posts/${id}`);
    });
});

// Posts#index -> GET /posts
router.get("/", (req, res) => {
  knex("posts")
    .orderBy("createdAt", "desc")
    .then(posts => {
      res.render("posts/index", { posts });
    });
});

// Posts#show -> Get /posts/:id
router.get("/:id", (req, res) => {
  // In the URL above, all the names prefixed with
  // `:` are called URL params. You can access URL
  // params with `req.params`.
  const { id } = req.params;

  knex("posts")
    .where("id", id)
    .first()
    // Knex method that works with select that will
    // return only the first post. Do this to avoid
    // having your post in an array.
    .then(post => {
      res.render("posts/show", { post });
    });
});

module.exports = router;
