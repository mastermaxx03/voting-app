const express = require("express");
// We use mergeParams: true to access the :pollId from the parent router (in server.js)
const router = express.Router({ mergeParams: true });
const { castVote } = require("../controllers/voteController");
const { protectVoter } = require("../middleware/voterAuthMiddleware");

// The `protectVoter` middleware will run first to ensure the user is a logged-in voter.
router.route("/vote").post(protectVoter, castVote);

module.exports = router;
