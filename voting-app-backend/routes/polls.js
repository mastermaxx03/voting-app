const express = require("express");
const router = express.Router();
const {
  createPoll,
  getAllPolls,
  getPollById,
  updatePoll,
  deletePoll,
} = require("../controllers/pollController");
const { protect } = require("../middleware/authMiddleware");

// Route to get all polls and create a new poll
router.route("/").get(protect, getAllPolls).post(protect, createPoll);

router
  .route("/:id")
  .get(protect, getPollById)
  .put(protect, updatePoll)
  .delete(protect, deletePoll);
// We will add more routes here later (e.g., for getting a single poll, updating, etc.)

module.exports = router;
