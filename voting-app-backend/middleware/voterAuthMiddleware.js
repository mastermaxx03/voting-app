// FILE: middleware/voterAuthMiddleware.js (NEW FILE)
// This is a new "gatekeeper" specifically for voters. It's similar to the
// admin one, but it checks for a logged-in voter.
const jwt = require("jsonwebtoken");
const Voter = require("../models/Voter");

exports.protectVoter = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Find the voter by ID from the token and attach it to the request
      req.voter = await Voter.findById(decoded.voter.id);

      if (!req.voter) {
        return res
          .status(401)
          .json({ success: false, error: "Not authorized, voter not found" });
      }

      next();
    } catch (error) {
      res
        .status(401)
        .json({ success: false, error: "Not authorized, token failed" });
    }
  }

  if (!token) {
    res.status(401).json({ success: false, error: "Not authorized, no token" });
  }
};
