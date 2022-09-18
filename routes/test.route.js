const express = require("express");
const { loadUser } = require("../user_model");
const route = express.Router();

route.get("/all", (req, res) => {
  res.send(loadUser);
});
route.get("/random", (req, res) => {
  const random = loadUser[Math.floor(Math.random() * loadUser.length)];
  res.send(random);
});
route.get("all/:id", (req, res) => {
  const { id } = req.params;
  const foundData = loadUser.find((loadUser) => loadUser.id == id);
  res.send(foundData);
});
route.put("/all", (req, res) => {
  loadUser.push(req.body);
  res.send(loadUser);
});

route.delete("/all/:id", (req, res) => {
  const { id } = req.params;
  const foundData = loadUser.find((loadUser) => loadUser.id == id);
  res.send(foundData);
});

module.exports = route;
