const express = require("express");
const router = express.Router();
const Author = require("../models/authors");

// all Authores  Route
router.get("/", async (req, res) => {
  let searchOptions = {};
  if (req.query != null && req.query != "") {
    searchOptions.name = new RegExp(req.query.name, "i");
  }
  try {
    const authors = await Author.find(searchOptions);
    res.render("authors/index", { authors: authors, searchOptions: req.query });
  } catch {}
});

// new authore route (just to display)
router.get("/new", (req, res) => {
  res.render("authors/new", { author: new Author() });
});
// create Author Route
router.post("/", async (req, res) => {
  const author = new Author({ name: req.body.name });
  try {
    const newAuthor = await author.save();
    // res.redirect(`authors/${newAuthor.id}`);
    res.redirect("authors");
  } catch (error) {
    res.render("authors/new", {
      author: author,
      errorMessage: "Error creating author"
    });
  }
});

module.exports = router;
