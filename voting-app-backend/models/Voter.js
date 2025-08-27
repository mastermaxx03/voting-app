const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VoterSchema = new Schema(
  {
    // This creates the critical link between a voter and the poll they belong to.
    poll: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Poll", // Connects this to the 'Poll' model
      required: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
    },
    name: {
      type: String,
      trim: true,
      // Not required, as per the wireframes
    },
    weight: {
      type: Number,
      required: true,
      default: 1.0,
    },
    // This flag is the key to preventing double voting.
    hasVoted: {
      type: Boolean,
      default: false,
    },
    // These fields will manage our secure OTP login flow.
    otp: {
      type: String,
    },
    otpExpires: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// Ensures that a single email address can only be added once per poll.
VoterSchema.index({ poll: 1, email: 1 }, { unique: true });

module.exports = mongoose.model("Voter", VoterSchema);
