const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Static files - public folder se
app.use(express.static(path.join(__dirname, '../public')));

// JSON parse karne ke liye
app.use(express.json());

// Home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Education module
app.get('/education', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/modules/education/index.html'));
});

// Baaki sab routes ke liye home page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Server start
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});