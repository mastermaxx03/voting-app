const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// This defines the structure for each individual question within a poll
const QuestionSchema = new Schema({
  text: {
    type: String,
    required: true,
    trim: true,
  },
  // This is the new field to store the URL of the uploaded file.
  attachmentUrl: {
    type: String,
    trim: true,
    // This is not required, as attachments are optional.
  },
  options: [
    {
      type: String,
      required: true,
    },
  ],
  enabledOptions: [
    {
      type: String,
      required: true,
    },
  ],
});

// This is the main blueprint for the Poll itself
const PollSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Poll title is required"],
      trim: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["Custom", "Insolvency", "Shareholder", "Auction"],
    },
    status: {
      type: String,
      required: true,
      enum: ["DRAFT", "OPEN", "EXTENDED", "CLOSED"],
      default: "DRAFT",
    },
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    },
    originalEndTime: {
      type: Date,
    },
    questions: [QuestionSchema],
    settings: {
      allowSkip: { type: Boolean, default: false },
      weightedVotes: { type: Boolean, default: true },
      extensionUsed: { type: Boolean, default: false },
      extensionReason: { type: String, trim: true },
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", //only accessible by the admin who created the poll
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Poll", PollSchema);
