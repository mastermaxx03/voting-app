const express = require("express");
// We need mergeParams: true to access the :pollId from the parent router (in server.js)
const router = express.Router({ mergeParams: true });
const { protect } = require("../middleware/authMiddleware");
const {
  addVoter,
  getVotersForPoll,
} = require("../controllers/voterController");

router.route("/").post(protect, addVoter).get(protect, getVotersForPoll);

module.exports = router;
