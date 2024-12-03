const express = require("express");
const app = express();
const accounts = require("./accounts");

app.use(express.json());

app.get("/accounts", (req, res) => {
  res.json(accounts);
  res.status(200).json(accounts);
});

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
