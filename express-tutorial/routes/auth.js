const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  console.log(req.body);
  if (req.body.name) {
    return res.status(200).send(`Welcome ${req.body.name}`);
  }
  res.status(401).send("Please provide your name");
});

module.exports = router