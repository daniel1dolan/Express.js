const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("home page");
});

app.get("/pictures/?", (req, res) => {
  res.send("pictures");
});

//cats cat catfancy catsfancy
app.get("/cats?(fancy)?", (req, res) => {
  res.send("my cats are fancy");
});

app.get("/contact", (req, res) => {
  let contact = req.param("name");
  console.log(contact);
  res.send("Add your name to the url.");
});

app.get("/contact/:name", (req, res) => {
  let name = req.param("name");
  res.send(`your name is ${name}`);
});

//add?num1=num&num2=num
app.get("/add", (req, res) => {
  let num1 = req.param("num1");
  let num2 = req.param("num2");
  let sum = Number(num1) + Number(num2);
  res.send(`${num1} + ${num2} = ${sum}`);
});

//add2/num1/num2
app.get("/add2/:num1/:num2", (req, res) => {
  let num1 = req.param("num1");
  let num2 = req.param("num2");
  let sum = Number(num1) + Number(num2);
  res.send(`<h1 style="color:red">${num1} + ${num2} = ${sum}</h1>`);
});

app.get("/pics", (req, res) => {
  let imgVar = req.param("img");
  res.send(`<img src="${imgVar}" />`);
});

app.get("*", (req, res) => {
  res.send("doge not found");
});

app.listen(2000, () => {
  console.log("running on port 2000");
});
