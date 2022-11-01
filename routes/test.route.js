const express = require("express");
const path = require('path');
const directory = path.join('data.json')
const route = express.Router();
const { readFileSync, writeFileSync } = require("fs");
const loadUser = JSON.parse(readFileSync(directory));

route.get("/all", (req, res) => {
  res.send(loadUser);
});
route.get("/random", (req, res) => {
  const random = loadUser[Math.floor(Math.random() * loadUser.length)];
  res.send(random);
});

route.get("all/:id", (req, res) => {
  const id  = req.params;
  console.log(id);
  const foundData = loadUser.find((loadUser) => loadUser.id == id);
  res.send(foundData);
});
route.post("/save", (req, res) => {
  const data = req.body;
  loadUser.push(data);
  const newData = JSON.stringify(loadUser, null, 2);
  const saveUser = writeFileSync("data.json", newData);
  res.send(saveUser);
});
route.put("/all:id", (req, res) => {
  loadUser.push(req.body);
  const putData = JSON.stringify(loadUser, null, 2);
  const putUser = writeFileSync("data.json", putData);
  res.send(putUser);
});

route.delete("/all/:id", (req, res) => {
  const { id } = req.params;
  const foundData = loadUser.find((loadUser) => loadUser.id == id);
  const deleteData = JSON.stringify(loadUser, null, 2);
  const deleteUser = writeFileSync("data.json", foundData);
  res.send(deleteUser);
});

module.exports = route;
