import express from "express";
import pool from "./config/db.js";

const app = express();

const users = [
  { name: "vaigarai", age: 21, gender: "female" }
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Database error");
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});