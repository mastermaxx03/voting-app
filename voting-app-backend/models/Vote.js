const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VoteSchema = new Schema(
  {
    // Link to the specific poll this vote belongs to
    poll: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Poll",
      required: true,
    },
    // Link to the specific question being answered
    question: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      // Note: This refers to a question inside a Poll's sub-document array.
    },
    // Link to the voter who cast this vote
    voter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Voter",
      required: true,
    },
    // The actual choice the voter made, e.g., "Approve", "Reject"
    option: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Records when the vote was cast
  }
);

module.exports = mongoose.model("Vote", VoteSchema);
