const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// 🔥 TEST ROUTE
app.get("/", (req, res) => {
  res.json({ message: "AI Video Backend is running 🚀" });
});

// 🎬 GENERATE VIDEO (MOCK FOR NOW)
app.post("/generate", async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt required" });
  }

  // fake job system (we upgrade later to real AI + queue)
  const jobId = Math.random().toString(36).substring(2, 10);

  res.json({
    jobId,
    status: "queued",
    message: "Video generation started"
  });
});

// 📊 STATUS CHECK (MOCK)
app.get("/status/:id", (req, res) => {
  res.json({
    jobId: req.params.id,
    progress: 100,
    status: "completed",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
  });
});

// 🚀 START SERVER (IMPORTANT FOR RENDER)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});