export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Only POST allowed" })
    }

    const { prompt } = req.body || {}

    if (!prompt) {
      return res.status(400).json({ error: "Missing prompt" })
    }

    console.log("Prompt received:", prompt)

    // 🔥 REAL SAFE TEST VIDEO (NO AI YET)
    const videoUrl =
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"

    return res.status(200).json({
      success: true,
      prompt,
      videoUrl,
    })
  } catch (err) {
    console.error(err)

    return res.status(500).json({
      error: "Server crashed",
      details: err.message,
    })
  }
}