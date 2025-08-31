console.log("✅ Auth routes file loaded.");
const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController.js");
const { requestOtp, verifyOtp } = require("../controllers/voterAuthController");

//admin routes
// @route   POST /api/auth/register
router.post("/register", register);

// @route   POST /api/auth/login
router.post("/login", login);

//voter routes
router.post("/voter/request-otp", requestOtp);
router.post("/voter/verify-otp", verifyOtp);

module.exports = router;
