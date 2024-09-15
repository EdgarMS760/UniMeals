
const express = require('express')
const controller = require('../Controllers/UserController')


const router = express.Router()
//Rutas para llamar funciones del protocolo HTTP
router.post("/register", controller.register)
router.post("/logIn", controller.logIn)
router.post("/update", controller.update)
router.get("/findUser", controller.findUser)
router.get("/findUsers", controller.findUsers)



//router.get("/findUsers/:email", findUsers)


module.exports = router
