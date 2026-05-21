export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    const { prompt } = req.body

    if (!prompt) {
      return res.status(400).json({ error: "Missing prompt" })
    }

    // TEMP DEMO VIDEO (replace with AI later)
    const videoUrl =
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"

    return res.status(200).json({
      success: true,
      prompt,
      videoUrl,
    })
  } catch (err) {
    return res.status(500).json({
      error: "Server crash",
      details: err.message,
    })
  }
}