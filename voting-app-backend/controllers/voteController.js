const Vote = require("../models/Vote");
const Voter = require("../models/Voter");
const Poll = require("../models/Poll");
const mongoose = require("mongoose");

// @desc    Cast a vote in a poll
// @route   POST /api/polls/:pollId/vote
// @access  Private (Voters only)
exports.castVote = async (req, res) => {
  const { pollId } = req.params;
  const { votes } = req.body; // Expects an array of vote objects: [{ questionId, option }]
  const voterId = req.voter.id;

  // Start a database session for a transaction
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // --- SECURITY CHECKS ---

    // 1. Check if the poll exists and is open
    const poll = await Poll.findById(pollId).session(session);
    if (!poll || (poll.status !== "OPEN" && poll.status !== "EXTENDED")) {
      await session.abortTransaction();
      session.endSession();
      return res
        .status(403)
        .json({ success: false, error: "This poll is not open for voting." });
    }

    // 2. Check if the voter is part of this poll and hasn't voted yet
    const voter = await Voter.findById(voterId).session(session);
    if (!voter || voter.poll.toString() !== pollId || voter.hasVoted) {
      await session.abortTransaction();
      session.endSession();
      return res
        .status(403)
        .json({
          success: false,
          error:
            "You are not eligible to vote or have already voted in this poll.",
        });
    }

    // --- SAVE THE VOTES ---

    const voteDocs = votes.map((vote) => ({
      poll: pollId,
      question: vote.questionId,
      voter: voterId,
      option: vote.option,
    }));

    await Vote.insertMany(voteDocs, { session });

    // --- UPDATE VOTER STATUS ---
    // Mark the voter as having voted to prevent double voting
    voter.hasVoted = true;
    await voter.save({ session });

    // If all operations were successful, commit the transaction
    await session.commitTransaction();
    session.endSession();

    res
      .status(201)
      .json({
        success: true,
        message: "Your vote has been successfully cast.",
      });
  } catch (error) {
    // If any error occurs, abort the entire transaction
    await session.abortTransaction();
    session.endSession();
    console.error("Vote casting error:", error);
    res
      .status(500)
      .json({
        success: false,
        error: "An error occurred while casting your vote.",
      });
  }
};
