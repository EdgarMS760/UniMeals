
const express = require('express')
const controller = require('../Controllers/ProductoController')

const router = express.Router()
//Rutas para llamar funciones del protocolo HTTP
router.post("/create", controller.create)
router.post("/update", controller.update)
router.post("/updateStatus", controller.updateStatus)

router.get("/findProducts", controller.findProducts)
router.get("/filterProducts", controller.filterProducts)
router.get("/findProductsUser", controller.findProductsUser)
router.get("/findProduct", controller.findProduct)



module.exports = router
