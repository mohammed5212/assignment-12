
const express = require('express');
const itemRoutes = require('./routes/itemRoutes');

const app = express();

// Middleware-----
app.use(express.json());

// Routes
app.get('/', (req, res) => res.send('Inventory API is Running'));
app.get('/health', (req, res) => res.json({ status: 'Server healthy' }));

app.use('/items', itemRoutes); // Mount item-related routes

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

module.exports = app;