const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.protect = async (req, res, next) => {
  console.log("--- SECURITY CHECK: Protect middleware is running! ---");
  let token;

  // Check if the token is in the headers and starts with "Bearer"
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header (e.g., "Bearer eyJhbGci...")
      token = req.headers.authorization.split(" ")[1];

      // Verify the token using our secret key
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Attach the user's ID to the request object for future use
      // We exclude the password from being attached
      req.user = await User.findById(decoded.user.id).select("-password");

      // If everything is okay, proceed to the next function (the controller)
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
