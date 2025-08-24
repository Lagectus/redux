// Import express
const express = require('express');
const path = require('path');

// Create an express app
const app = express();

// Define a port
const PORT = 8000;

console.log(path.resolve(__dirname,"../reactcountryproject3/dist"));


app.use(express.static(path.resolve(__dirname,"../reactcountryproject3/dist")))

// Middleware to parse JSON (optional)
app.use(express.json());

// Simple route
app.get('/api', (req, res) => {
  res.send('Hello World! 🚀');
});

// Another route example
app.get('api/about', (req, res) => {
  res.send('This is a simple Express server.');
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, "../reactcountryproject3/dist", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
