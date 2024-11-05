const express = require("express");
const router = express.Router();
const { createBooking } = require("../controller/booking");

router.post("/create", createBooking);

module.exports = router;