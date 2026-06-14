export default function handler(req, res) {
  const key = process.env.GEMINI_API_KEY;
  if (!key) {
    return res.status(404).json({ error: 'API key not configured' });
  }
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({ key });
}
