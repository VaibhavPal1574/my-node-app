require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const MESSAGE = process.env.MESSAGE || "Hello from Node.js!";

app.get('/', (req, res) => {
  res.send(`🚀 ${MESSAGE} - Running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
