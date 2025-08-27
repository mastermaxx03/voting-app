const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// A simple test route
app.get("/", (req, res) => {
  res.send("Welcome to the In-House Voting App Backend!");
});

// --- ROUTES ---
// Add these two lines to connect your poll routes
const pollRoutes = require("./routes/polls");
app.use("/api/polls", pollRoutes);
const voterRoutes = require("./routes/voters");
app.use("/api/polls/:pollId/voters", voterRoutes);

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
    process.exit(1); // Exit the process if DB connection fails
  });
