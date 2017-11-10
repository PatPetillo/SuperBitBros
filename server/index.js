const path = require('path');
const express = require('express');
const app = express();
const socketio = require('socket.io');

app.use(express.static(path.join(__dirname, '../public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(8080, () => {
  console.log('listening on 8080 dawg');
});

// const io = socketio(server);

// io.on('connect', socket => {
//   console
// })