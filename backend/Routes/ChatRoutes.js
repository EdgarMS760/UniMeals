
const express = require('express')
const controller = require('../Controllers/ChatController')

const router = express.Router();
//Rutas para llamar funciones del protocolo HTTP
router.post("/create", controller.create)
router.get("/findChats", controller.findChats)
router.get("/findChat", controller.findChat)



module.exports = router
