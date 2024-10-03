const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

app.get('/planets', (req, res) => {
  const planets = [
    { name: 'Mercury', position: [2, 0, 0], size: 0.5, color: 'gray', speed: 0.3 },
    { name: 'Venus', position: [4, 0, 0], size: 0.9, color: 'yellow', speed: 0.2 },
    { name: 'Earth', position: [6, 0, 0], size: 1, color: 'blue', speed: 0.1 },
    { name: 'Mars', position: [8, 0, 0], size: 0.7, color: 'red', speed: 0.05 },
  ];
  res.json(planets);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
