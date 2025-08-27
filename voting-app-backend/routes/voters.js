const express = require("express");
// We need mergeParams: true to access the :pollId from the parent router (in server.js)
const router = express.Router({ mergeParams: true });

const {
  addVoter,
  getVotersForPoll,
} = require("../controllers/voterController");

router.route("/").post(addVoter).get(getVotersForPoll);

module.exports = router;
