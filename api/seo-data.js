export default function handler(req, res) {
  if (!global.store) {
    global.store = [];
  }

  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        global.store.push(data);
        res.status(200).json({ message: 'Data ontvangen', data });
      } catch (e) {
        res.status(400).json({ error: 'Invalid JSON' });
      }
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
