const accounts = require("../../accounts");

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

const updateAccount = (currentAccount, newData) => {
  const myUpdatedAccount = Object.assign(currentAccount, newData);
  return myUpdatedAccount;
};

exports.listAccounts = (req, res) => {
  res.json(accounts);
  res.status(200).json(accounts);
};

exports.createAccount = (req, res) => {
  const newAccount = createNewAccount(req.body);
  res.status(201).json(newAccount);
};

exports.updateAccount = (req, res) => {
  const { accountId } = req.params;
  const account = accounts.find((account) => account.id == accountId);
  if (account) {
    const updatedAccount = updateAccount(account, req.body);
    res.status(200).json(updatedAccount);
  } else {
    res.status(404).json();
  }
};

exports.deleteAccount = (req, res) => {
  const { accountId } = req.params;
  const account = accounts.find((account) => account.id == accountId);
  if (account) {
    deleteAccount(accountId);
    res.status(204).end();
  } else {
    res.status(404).json();
  }
};
