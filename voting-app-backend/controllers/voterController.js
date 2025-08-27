const Voter = require("../models/Voter");
const Poll = require("../models/Poll");

// @desc    Add a voter to a specific poll
// @route   POST /api/polls/:pollId/voters
// @access  Private (will be protected later)
exports.addVoter = async (req, res) => {
  try {
    const pollId = req.params.pollId;
    // Check if the poll exists first
    const poll = await Poll.findById(pollId);
    if (!poll) {
      return res.status(404).json({ success: false, error: "Poll not found" });
    }

    // Add the pollId to the voter data before creating
    const newVoterData = {
      ...req.body,
      poll: pollId,
    };

    const voter = new Voter(newVoterData);
    await voter.save();

    res.status(201).json({
      success: true,
      data: voter,
    });
  } catch (error) {
    // This will catch errors, including the duplicate email error from our schema index
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// @desc    Get all voters for a specific poll
// @route   GET /api/polls/:pollId/voters
// @access  Private (will be protected later)
exports.getVotersForPoll = async (req, res) => {
  try {
    const pollId = req.params.pollId;
    const voters = await Voter.find({ poll: pollId });

    res.status(200).json({
      success: true,
      count: voters.length,
      data: voters,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
