const express = require('express')
const router = express.Router()
const jsonData = require("../data.js")


router.post("/", (req, res) => {
    if (!req.body.name) {
      return res
        .status(400)
        .json({ success: false, msg: "please provide name value" });
    }
    res.status(201).send({ success: true, person: req.body.name });
  });
  
  router.get("/", (req, res) => {
    res.status(200).json({ success: true, data: jsonData.people });
  });
  
  router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const person = jsonData.people.find((person) => person.id === Number(id));
    if (!person) {
      return res
        .status(404)
        .json({ sucess: false, msg: `User ${id} does not exist` });
    }
    const newPeople = jsonData.people.map((person) => {
      if (person.id === Number(id)) {
        person.name = name;
      }
      return person;
    });
    res.status(200).json({ success: true, data: newPeople });
  });
  
  router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const person = jsonData.people.find((person) => person.id === Number(id));
    if (!person) {
      return res
        .status(404)
        .json({ sucess: false, msg: `User ${id} does not exist` });
    }
    const newPeople = jsonData.people.filter((person) => person.id !== Number(id));
    res.status(200).json({ success: true, data: newPeople });
  });
  
  module.exports = router