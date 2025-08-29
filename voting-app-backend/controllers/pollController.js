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
      createdBy: req.user.id, // Placeholder Admin ID
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
//get poll by id to view details about a particular poll
exports.getPollById = async (req, res) => {
  try {
    const poll = await Poll.findById(req.params.id);

    if (!poll) {
      return res.status(404).json({ success: false, error: "Poll not found" });
    }

    res.status(200).json({ success: true, data: poll });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server Error" });
  }
};
//update a poll
exports.updatePoll = async (req, res) => {
  try {
    let poll = await Poll.findById(req.params.id);

    if (!poll) {
      return res.status(404).json({ success: false, error: "Poll not found" });
    }

    // We will add security here later to ensure only the creator can update it.

    poll = await Poll.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the modified document
      runValidators: true, // Run schema validators on update
    });

    res.status(200).json({ success: true, data: poll });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
// @desc    Delete a poll
// @route   DELETE /api/polls/:id
// @access  Private (will be protected later)
exports.deletePoll = async (req, res) => {
  try {
    const poll = await Poll.findById(req.params.id);

    if (!poll) {
      return res.status(404).json({ success: false, error: "Poll not found" });
    }

    // We will add security here later.

    await poll.deleteOne(); // Use deleteOne() method on the document

    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server Error" });
  }
};
