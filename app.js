const express = require("express");
const app = express();
const accounts = require("./accounts");

app.use(express.json());

const createNewAccount = (newAccountData) => {
  const newId = accounts.length + 1;
  const funds = 0;
  const newAccount = Object.assign({ id: newId, funds: funds }, newAccountData);
  return newAccount;
};

const deleteAccount = (accountIdToBeDeleted) => {
  const newAccounts = accounts.filter(
    (account) => account.id != accountIdToBeDeleted
  );
};

app.get("/accounts", (req, res) => {
  res.json(accounts);
  res.status(200).json(accounts);
});

app.post("/accounts", (req, res) => {
  const newAccount = createNewAccount(req.body);
  res.status(201).json(newAccount);
});

app.delete("/accounts/:accountId", (req, res) => {
  const { accountId } = req.params;
  const account = accounts.find((account) => account.id == accountId);
  if (account) {
    deleteAccount(accountId);
    res.status(204).end();
  } else {
    res.status(404).json();
  }
});

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
