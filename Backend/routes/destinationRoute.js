const express = require("express");
const router = express.Router();
const {
  createDestination,
  deleteDestination,
  editDestination,
  getAllDestination,
} = require("../controller/destination");

router.post("/create", createDestination);
router.delete("/:id", deleteDestination);
router.put("/:id", editDestination);
router.get("/",getAllDestination),
module.exports = router;
