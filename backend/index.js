const express = require('express')
const bodyParser = require('body-parser')
const userRoutes = require('./Routes/UserRoutes');
const calificaionesRoutes = require('./Routes/CalificacionesRoutes');
const chatRoutes = require('./Routes/ChatRoutes');
const mensajesRoutes = require('./Routes/MensajesRoutes');
const productosRoutes = require('./Routes/ProductosRoutes');
const { db } = require('./firebase')

const PORT = 3000;
const app = express()
const socketIo = require('socket.io');
const http = require('http');

app.use(bodyParser.json())
app.use("/api/usuarios", userRoutes)
app.use("/api/productos", productosRoutes)
app.use("/api/mensajes", mensajesRoutes)
app.use("/api/chats", chatRoutes)
app.use("/api/calificaciones", calificaionesRoutes)
const server = http.createServer(app);
const io = socketIo(server);

let usuariosActivos = []
io.on('connection', socket => {
    console.log("Hola")
    //Obtener usuario en linea
    socket.on("addUserOnline", (emailUser) => {
        if (!usuariosActivos.some((user) => user?.email === emailUser)) {
            usuariosActivos.push({
                email: emailUser,
                socketId: socket.id,
            })
        }
        io.emit("getUsersOnline", usuariosActivos)
    })

    //Añadir mensaje en tiempo real
    socket.on("sendMessage", (message) => {
        const usuarioOnline = usuariosActivos.find(
            (user) => user?.email === message?.emailUser
        )
        if (usuarioOnline) {
            io.to(usuarioOnline.socketId).emit("getMessage", message);
        }
    })

    socket.on("disconnect", () => {
        usuariosActivos = usuariosActivos.filter((user) => user.socketId !== socket.id)
        io.emit("getUsersOnline", usuariosActivos)
    })


})

io.listen(4000)
server.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

