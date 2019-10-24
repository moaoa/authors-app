const express = require("express");
const router = express.Router();

// all Authores  Route
router.get("/", (req, res) => {
  res.render("authores/index");
});

// new authore route just to display
router.get("/new", (req, res) => {
  res.render("authores/new");
});
// create Author
router.post("/", (req, res) => {
  res.send("Create");
});

module.exports = router;
