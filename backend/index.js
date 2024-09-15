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

app.use(bodyParser.json())
app.use("/api/usuarios", userRoutes)
app.use("/api/productos", productosRoutes)
app.use("/api/mensajes", mensajesRoutes)
app.use("/api/chats", chatRoutes)
app.use("/api/calificaciones", calificaionesRoutes)




app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

