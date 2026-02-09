const express = require("express");

const app = express();

app.get("/zenmart", (req, res) => {
  res.send("Hello Zen Mart!");
  console.log("Hello Zen Mart!");
});

app.listen(3000, () => {
  console.log("starting the server testing !");
});

console.log("09-02-2026");

app.get("/zenmart", (req, res) => {
  res.send("Hello Zen Mart!");
  console.log("Hello Zen Mart!");
});

app.listen(3000, () => {
  console.log("starting the server testing !");
});
