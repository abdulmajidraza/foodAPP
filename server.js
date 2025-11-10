const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

let orders = [];

app.get("/", (req, res) => {
  res.render("login");
});
app.post("/login", (req, res) => {
    res.redirect("/menu");
});
app.get("/menu", (req, res) => {
  res.render("index");
});
app.get("/detail", (req, res) => {
  res.redirect("/add");
});

app.get("/add", (req, res) => {
  res.render("add");
});

app.post("/add", (req, res) => {
  const { name, item, amount } = req.body;
  const timestamp = new Date().toLocaleString();

  orders.push({ name, item, amount, timestamp });

  res.redirect("/show");
});

app.get("/show", (req, res) => {
  res.render("show", { orders });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
