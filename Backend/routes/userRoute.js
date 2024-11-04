const express = require("express");
const router = express.Router();
const { register, login, deleteUser } = require("../controller/user");

router.post("/register", register);
router.post("/login", login);
router.delete("/:id", deleteUser);

module.exports = router;
