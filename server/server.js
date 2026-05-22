const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>SuperLive Backend LIVE Ho Gaya ✅</h1><h2>Bhai Server Chal Raha Hai</h2><p>2 din baad ho gaya finally</p>');
});

app.get('/education', (req, res) => {
  res.send('<h1>Education Module</h1><p>Ab yaha login signup banega</p>');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});