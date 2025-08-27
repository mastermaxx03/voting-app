const express = require("express");
const router = express.Router();
const { createPoll, getAllPolls } = require("../controllers/pollController");

// Route to get all polls and create a new poll
router.route("/").get(getAllPolls).post(createPoll);

// We will add more routes here later (e.g., for getting a single poll, updating, etc.)

module.exports = router;
