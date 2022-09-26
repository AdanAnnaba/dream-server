const express = require("express");
const { appendFileSync, readFileSync } = require("fs");
const loadUser = JSON.parse(readFileSync("data.json"));
const route = express.Router();

route.get("/all", (req, res) => {
  res.send(loadUser);
});
route.post("/save", (req, res) => {
  const user = JSON.stringify(req.body,null,3,'\t');
  const data = appendFileSync("data.json",user);
  res.send(data);
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
