const { db } = require('../firebase')
const admin = require('firebase-admin')

module.exports.register = async (req, res) => {
    try {
        const { email, apellido, nombre, password } = req.body
        const ubicationN = Number(req.body.ubicationN)
        const ubicationE = Number(req.body.ubicationE)

        const userRef = db.collection('usuarios').doc()
        await userRef.set({
            nombre: nombre,
            apellido: apellido,
            email: email,
            ubicación: new admin.firestore.GeoPoint(ubicationN, ubicationE),
            fecha_registro: admin.firestore.Timestamp.now(),
            contrasena: password
        })

    } catch (error) {
        console.log(error)
    }
}

module.exports.logIn = (req, res) => {
    res.send('api working here...');
}

module.exports.update = (req, res) => {
    res.send('api working here...');
}

module.exports.findUser = (req, res) => {
    res.send('api working here...');
}

module.exports.findUsers = (req, res) => {
    res.send('api working here...');
}