const socketio = require("socket.io");

module.exports = function (server) {
  const io = socketio(server);
  io.on("connection", function (socket) {
    socket.broadcast.emit();
    socket.on("chat message", function (data) {
      io.emit("chat message", data);
    });
  });
};
