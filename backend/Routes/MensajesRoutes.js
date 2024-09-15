
const express = require('express')
const controller = require('../Controllers/MensajesController')

const router = express.Router()
//Rutas para llamar funciones del protocolo HTTP
router.post("/send", controller.send)
router.get("/findMessages/:idChat", controller.findMessages)




module.exports = router
