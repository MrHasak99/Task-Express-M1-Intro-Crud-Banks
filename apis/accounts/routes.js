const express = require("express");
const router = express.Router();

const {
  listAccounts,
  createAccount,
  updateAccount,
  deleteAccount,
} = require("./controllers");

router.get("/", listAccounts);
router.post("/", createAccount);
router.put("/:accountId", updateAccount);
router.delete("/:accountId", deleteAccount);

module.exports = router;
