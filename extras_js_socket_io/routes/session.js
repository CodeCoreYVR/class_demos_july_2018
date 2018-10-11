const bcrypt = require("bcrypt");
const express = require("express");
const knex = require("../db/client");

const router = express.Router();

router.get("/new", (req, res) => {
  res.render("session/new");
});

router.post("/", async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await knex("users")
      .where({ email })
      .first();

    console.log("🔥🔥🔥🔥🔥🔥🔥", user);

    if (user && (await bcrypt.compare(password, user.passwordDigest))) {
      req.session.userId = user.id;

      res.redirect("/");
    } else {
      res.render("session/new");
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/", async (req, res, next) => {
  req.session.userId = undefined;

  res.redirect("/");
});

module.exports = router;

// const bcrypt = require('bcrypt');
// const genSalt =  async () => {
//   const salt = await bcrypt.genSalt(10)
//   return salt;
// }
