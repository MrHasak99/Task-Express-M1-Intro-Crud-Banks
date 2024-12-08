const accounts = require("../../accounts");
const Account = require("../../models/Account");

const deleteAccount = (accountIdToBeDeleted) => {
  const newAccounts = accounts.filter(
    (account) => account.id != accountIdToBeDeleted
  );
};

exports.listAccounts = (req, res) => {
  res.json(accounts);
  res.status(200).json(accounts);
};

exports.createAccount = async (req, res) => {
  const account = new Account(req.body);
  const newAccount = await account.save();
  res.status(201).json(newAccount);
};

exports.updateAccount = async (req, res) => {
  const { accountId } = req.params;
  try {
    const foundAccount = await Account.findById(accountId);
    await foundAccount.updateOne(req.body);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteAccount = async (req, res) => {
  const { accountId } = req.params;
  try {
    const foundAccount = await Account.findById(accountId);
    await foundAccount.deleteOne();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
