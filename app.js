const express = require("express");
const { connectDB } = require("./database");

const app = express();

const accountsRouter = require("./apis/accounts/routes");

app.use(express.json());
app.use("/api/accounts", accountsRouter);

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});

connectDB().then();
