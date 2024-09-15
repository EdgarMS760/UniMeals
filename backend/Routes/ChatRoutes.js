
const express = require('express')
const controller = require('../Controllers/ChatController')

const router = express.Router();
//Rutas para llamar funciones del protocolo HTTP
router.post("/create", controller.create)
router.get("/findChats/:idUser", controller.findChats)
router.get("/findChat/:idChat", controller.findChat)



module.exports = router
