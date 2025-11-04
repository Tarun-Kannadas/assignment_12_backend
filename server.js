const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Resume = require("./models/Resume");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/my_resumeDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log("❌ DB Error:", err));

//Route to test
app.get("/", (req, res) => {
  res.send("Resume API is running...");
});

//Get Resume Data
app.get("/api/resume", async (req, res) => {
  try {
    const resume = await Resume.findOne();
    res.json(resume);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Add Resume Data (insert once using Hoppscotch/Postman)
app.post("/api/resume", async (req, res) => {
  try {
    const resume = new Resume(req.body);
    await resume.save();
    res.status(201).json(resume);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

const PORT = 5000;
app.listen(PORT)
