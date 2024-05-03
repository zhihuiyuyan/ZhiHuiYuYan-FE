import io from 'socket.io-client';

const socketUrl = 'http://localhost:8087';

const socket = io(socketUrl);

socket.on('connect', () => {
  console.log('Connected to WebSocket server');
});
socket.on('disconnect', () => {
  console.log('WebSocket connection closed');
});

export default socket