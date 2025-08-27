const Poll = require("../models/Poll");

// @desc    Create a new poll
// @route   POST /api/polls
// @access  Private (will be protected later)
exports.createPoll = async (req, res) => {
  try {
    // Note: We are hardcoding the 'createdBy' for now.
    // Later, this will come from the logged-in admin user's ID.
    const newPollData = {
      ...req.body,
      createdBy: "60d5ec49a3e5a3e5d8a3e5a3", // Placeholder Admin ID
    };

    const poll = new Poll(newPollData);
    await poll.save();
    res.status(201).json({
      success: true,
      data: poll,
    });
  } catch (error) {
    console.error("Error creating poll:", error);
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// @desc    Get all polls
// @route   GET /api/polls
// @access  Private (will be protected later)
exports.getAllPolls = async (req, res) => {
  try {
    const polls = await Poll.find({}).sort({ createdAt: -1 }); // Get newest first
    res.status(200).json({
      success: true,
      count: polls.length,
      data: polls,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
