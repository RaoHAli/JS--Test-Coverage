// app.js
const express = require('express');
const app = express();
app.use(express.json()); // Important for parsing request bodies

app.get('/api/greet/:name', (req, res) => {
  const name = req.params.name;
  res.json({ message: `Hello, ${name}!` });
});

app.post('/api/sum', (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: 'Both a and b must be numbers' });
  }
  const sum = a + b;
  res.json({ result: sum });
});

module.exports = app;

