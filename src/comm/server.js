const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const formatMessage = require('./utils/messages');
const { userJoin, getCurrentUser, userLeave, getRoomUsers } = require('./utils/users');
const os = require('os');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.get('/test', (req, res) => {
    return res.send('Hello World');
});

// Static folder
app.use(express.static(path.join(__dirname, "public")));

// Run when client connects
const botName = "Community";
io.on('connection', socket => {
    socket.on('joinRoom', ({ username, room }) => {
        const user = userJoin(socket.id, username, room);

        socket.join(user.room);

        // Welcome current user
        socket.emit('message', formatMessage(botName, 'Welcome to Community!'));

        // Broadcast when a user connects
        socket.broadcast
            .to(user.room)
            .emit(
                'message',
                formatMessage(botName, `${user.username} has joined the chat`)
            );

        // Send users and room info
        io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room)
        });
    });

    // Listen for chatMessage
    socket.on('chatMessage', msg => {
        const user = getCurrentUser(socket.id);

        io.to(user.room).emit('message', formatMessage(user.username, msg));
    });

    // Runs when client disconnects
    socket.on('disconnect', () => {
        const user = userLeave(socket.id);

        if (user) {
            io.to(user.room).emit(
                'message',
                formatMessage(botName, `${user.username} has left the chat`)
            );

            // Send users and room info
            io.to(user.room).emit('roomUsers', {
                room: user.room,
                users: getRoomUsers(user.room)
            });
        }
    });
});

// Define an API route to return the chat application URLs
app.get('/api/chat-url', (req, res) => {
  // Get the hostname from the request object
  const hostname = req.hostname;

  // Use a common local network IP address and different ports
  const localPort = process.env.PORT || 3000; // Default to 8080
  const networkPort = process.env.NETWORK_PORT || 3000; // Default to 3000

  const networkIpAddress = '172.20.10.2'; // Replace with your common local network IP address

  // Use different ports for local and network
  const localChatAppURL = `http://${hostname}:${localPort}`;
  const networkChatAppURL = `http://${networkIpAddress}:${networkPort}`;

  console.log("Local URL:", localChatAppURL);
  console.log("Network URL:", networkChatAppURL);

  res.json({ localUrl: localChatAppURL, networkUrl: networkChatAppURL });
});

const PORT = process.env.PORT || 8080;
console.log(`Local Server running on port ${PORT}`);
server.listen(PORT);
