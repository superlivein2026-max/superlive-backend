const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: { origin: "*" }
});

app.use(cors());
app.use(express.json());

// Purana public folder serve karo - Yahi tera pehla design hai
app.use(express.static(path.join(__dirname, '../public')));

// Login API
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === '123') {
    res.json({ success: true, user: username });
  } else {
    res.status(401).json({ success: false });
  }
});

// Socket.io
io.on('connection', (socket) => {
  console.log('User connected');
});

// Home page - public/index.html khulega
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});