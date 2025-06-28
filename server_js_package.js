// server.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

let seoDataStore = [];

// Endpoint om SEO-data te ontvangen
app.post('/api/seo-data', (req, res) => {
  const data = req.body;
  seoDataStore.push(data);
  console.log('✅ SEO data ontvangen:', data);
  res.status(200).json({ message: 'SEO data ontvangen', data });
});

// Endpoint om opgeslagen data te bekijken
app.get('/api/seo-insights', (req, res) => {
  res.status(200).json(seoDataStore);
});

app.get('/', (req, res) => {
  res.send('✅ AI SEO backend draait en is online. Gebruik /api/seo-data en /api/seo-insights');
});

app.listen(PORT, () => {
  console.log(`✅ AI SEO backend draait op http://localhost:${PORT}`);
});

/*
Plaats deze samen met onderstaande package.json in de ROOT van je nieuwe GitHub repository.
*/

// package.json
/*
{
  "name": "ai-seo-backend",
  "version": "1.0.0",
  "description": "AI SEO backend voor Werkvindeninhetbuitenland.nl",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.19.2",
    "body-parser": "^1.20.2"
  }
}
*/
