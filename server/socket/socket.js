import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

const userSocketMap = {}; // {userId:socketId}

io.on("connection", (socket) => {
  console.log("a user is connected", socket.id);
  const userId = socket.handshake.query.userId;
  if (userId != "undefined") userSocketMap[userId] = socket.id;
  //to send events to all connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));
  socket.on("Typing", () => {
    socket.broadcast.emit("userTyping");
  });
  socket.on("stopTyping", () => {
    socket.broadcast.emit("userStopTyping");
  });
  //socket.on ise used to listen to events. can be used both in client and server side.
  socket.on("disconnect", () => {
    console.log("a user is disconnected", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };
