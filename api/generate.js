export default async function handler(req, res) {
  // 1. Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // 2. Grab the key and use ?.trim() to completely wipe out 
  // any hidden spaces or hidden next-line characters!
  const apiKey = process.env.GROQ_API_KEY?.trim();
  
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured on Vercel' });
  }

  try {
    // 3. Forward request to Groq safely
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
