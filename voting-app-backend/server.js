const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// --- ROUTES ---
const pollRoutes = require("./routes/polls");
const voterRoutes = require("./routes/voters");
const authRoutes = require("./routes/auth");
const voteRoutes = require("./routes/votes");

app.use("/api/polls", pollRoutes);
app.use("/api/polls/:pollId/voters", voterRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/polls/:pollId", voteRoutes);

// A simple test route
app.get("/", (req, res) => {
  res.send("Welcome to the In-House Voting App Backend!");
});

// Define the port
const PORT = process.env.PORT || 5001;

// Connect to MongoDB and start the server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Successfully connected to MongoDB!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
    process.exit(1);
  });
