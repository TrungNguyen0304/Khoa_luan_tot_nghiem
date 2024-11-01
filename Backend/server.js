const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./configs/db");
const authRoutes = require("./routes/userRoute");

const PORT = process.env.PORT || 8001;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// API routes
app.use("/api/user", authRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
