const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/cats", (req, res) => {
  res.send("Meow");
});

app.get("/dogs", (req, res) => {
  res.send("Woof");
});

app.get("/cats_and_dogs", (req, res) => {
  res.send("Living together");
});

app.get("/greet/:name", (req, res) => {
  let name = req.param("name");
  res.send(`Hello, ${name}!`);
});

app.get("/year", (req, res) => {
  var age = req.param("age");
  var date = new Date();
  var yearB = date.getFullYear() - Number(age);
  res.send(`You were born in ${yearB}`);
});

app.listen(2000, () => {
  console.log("running on port 2000");
});
