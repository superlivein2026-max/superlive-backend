const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, { cors: { origin: "*" } });
app.get('/', (req, res) => res.send('SuperLive Backend Running 🚀'));
io.on('connection', (socket) => {
  console.log('User connected');
  socket.on('join-room', (roomId) => socket.join(roomId));
  socket.on('send-gift', (data) => io.to(data.roomId).emit('receive-gift', data));
  socket.on('disconnect', () => console.log('User disconnected'));
});
const PORT = process.env.PORT || 3000;
http.listen(PORT, () => console.log(`Server running on port ${PORT}`));