const express = require("express");
const router = express.Router();
const knex = require("../db/client");

const bcrypt = require("bcrypt");

router.get("/new", (req, res) => {
  res.render("users/new");
});

router.post("/", async (req, res, next) => {
  const { userName, email, password } = req.body;

  try {
    const passwordDigest = await bcrypt.hash(password, 10);

    const [id] = await knex("users")
      .insert({
        userName,
        email,
        passwordDigest
      })
      .returning("id");

    req.session.userId = id;

    res.redirect("/");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
