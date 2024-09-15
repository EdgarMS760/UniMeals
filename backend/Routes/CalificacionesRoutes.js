
const express = require('express')
const controller = require('../Controllers/CalificacionesController')

const router = express.Router()
//Rutas para llamar funciones del protocolo HTTP
router.post("/send", controller.send)
router.get("/findCalificaciones/:idProducto", controller.findCalificaciones)



module.exports = router
