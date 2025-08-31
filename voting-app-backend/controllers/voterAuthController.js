const Voter = require("../models/Voter");
const Poll = require("../models/Poll");
const jwt = require("jsonwebtoken");

// A simple function to generate a random 6-digit OTP
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// @desc    Request an OTP for a voter
// @route   POST /api/auth/voter/request-otp
// @access  Public
exports.requestOtp = async (req, res) => {
  try {
    const { email } = req.body;

    // Find an active poll that this email is registered for
    const voter = await Voter.findOne({ email: email.toLowerCase() });

    if (!voter) {
      return res
        .status(404)
        .json({ success: false, error: "Email not found in any active poll" });
    }

    const poll = await Poll.findById(voter.poll);
    if (!poll || (poll.status !== "OPEN" && poll.status !== "EXTENDED")) {
      return res
        .status(403)
        .json({
          success: false,
          error: "This poll is not currently open for voting",
        });
    }

    if (voter.hasVoted) {
      return res
        .status(403)
        .json({ success: false, error: "You have already voted in this poll" });
    }

    // Generate OTP and set expiration (e.g., 10 minutes from now)
    const otp = generateOTP();
    voter.otp = otp;
    voter.otpExpires = Date.now() + 10 * 60 * 1000; // 10 minutes
    await voter.save();

    // In a real application, you would email the OTP here.
    // For now, we'll log it to the console for testing.
    console.log(`VOTER OTP for ${email}: ${otp}`);

    res.status(200).json({ success: true, message: "OTP sent to your email" });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

// @desc    Verify OTP and log in a voter
// @route   POST /api/auth/voter/verify-otp
// @access  Public
exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const voter = await Voter.findOne({
      email: email.toLowerCase(),
      otp,
      otpExpires: { $gt: Date.now() }, // Check that OTP is not expired
    });

    if (!voter) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid or expired OTP" });
    }

    // Clear the OTP after successful verification
    voter.otp = undefined;
    voter.otpExpires = undefined;
    await voter.save();

    // Create a JWT token for the voter's session
    const payload = {
      voter: {
        id: voter.id,
        pollId: voter.poll,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" }, // Voter session is shorter
      (err, token) => {
        if (err) throw err;
        res.json({ success: true, token });
      }
    );
  } catch (error) {
    res.status(500).json({ success: false, error: "Server Error" });
  }
};
