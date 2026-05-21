export default function handler(req, res) {
  res.status(200).json({
    status: "AI Video Backend Running",
    endpoints: {
      generate: "/api/generate"
    }
  })
}