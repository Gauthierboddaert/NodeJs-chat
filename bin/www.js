var app = require("../app");
var io = require("../io/conf");
var http = require("http");

var port = "3000";
app.set("port", port);

var server = http.createServer(app);

var sockets = io(server);

server.listen(port);
