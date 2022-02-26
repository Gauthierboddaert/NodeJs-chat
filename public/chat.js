const socket = io();

send.onsubmit = function (event) {
  event.preventDefault();
  socket.emit("chat message", { msg: messag.value });
  messag.value = "";
};

socket.on("chat message", function (data) {
  const li = document.createElement("li");
  li.innerText = data.msg;
  chat.appendChild(li);
});
