export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  
  const key = process.env.GROQ_API_KEY;
  
  if (!key) {
    return res.status(500).json({ error: 'API key not configured' });
  }
  
  return res.status(200).json({ key });
}
