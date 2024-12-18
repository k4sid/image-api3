// server.js

const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Define your API_KEY
const API_KEY = 'IxokgMQ7Q8RLnIjQER1FyjYOHZc3NsrIvUq5kSJ0sojxBlzNOQRGh6HfmzXNwK0gznuRNc8NgkDuy81Xy2sV4KABKJlQWTs5LemQslMOtNQzA2LHOSzfceFYJHLSdUuf';

// Middleware for CORS
app.use(cors());

// Middleware to authenticate API Key
function authenticateApiKey(req, res, next) {
    const apiKey = req.query.apiKey;  // API key is passed as a query parameter
    if (!apiKey || apiKey !== API_KEY) {
        return res.status(403).json({ message: 'Forbidden: Invalid API Key' });
    }
    next();
}

// Endpoint to fetch images and titles
app.get('/images', authenticateApiKey, (req, res) => {
    const images = [
        { title: 'Image 1', url: 'https://via.placeholder.com/200' },
        { title: 'Image 2', url: 'https://via.placeholder.com/200' },
        { title: 'Image 3', url: 'https://via.placeholder.com/200' },
        { title: 'Image 4', url: 'https://via.placeholder.com/200' },
        { title: 'Image 5', url: 'https://via.placeholder.com/200' }
    ];
    res.json(images);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
