const http = require("http")
const express = require("express")
const socketio = require("socket.io")

const app = express();
const server = http.createServer(app);
const io = socketio.listen(server);

app.set("port",process.env.PORT || 3000);

app.use(express.static("./public"))

server.listen(app.get("port"),()=>{
    console.log("Servidor corriendo e este puerto" + app.get("port"));
});