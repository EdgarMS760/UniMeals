
const express = require('express')
const controller = require('../Controllers/MensajesController')

const router = express.Router()
//Rutas para llamar funciones del protocolo HTTP
router.post("/send", controller.send)
router.get("/findMessages", controller.findMessages)



module.exports = router
