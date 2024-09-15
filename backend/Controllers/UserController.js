const { db } = require('../firebase')
const admin = require('firebase-admin')
const validator = require('validator')


module.exports.register = async (req, res) => {
    try {
        const { email, apellido, nombre, password } = req.body
        let isValid = true
        let errors = []
        if (!nombre || !apellido || !email || !password)
            return res.status(400).send({ msg: "Necesitas ingresar todos los datos" })

        if (!validator.isEmail(email)) {
            errors.push({ column: "Email" })
            isValid = false
        }

        if (!validator.isStrongPassword(password)) {
            errors.push({ column: "Password" })
            isValid = false
        }

        if (!validator.matches(nombre, /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/)) {
            errors.push({ column: "Nombre" })
            isValid = false
        }

        if (!validator.matches(apellido, /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/)) {
            errors.push({ column: "Apellido" })
            isValid = false
        }


        const userObtained = await db.collection('usuarios').where('email', '==', email).get()

        if (userObtained.docs.length > 0) {
            errors.push({ column: "Email" })
            isValid = false
        }

        if (!isValid)
            return res.status(400).send({ errors: errors })

        const userRef = db.collection('usuarios').doc()
        await userRef.set({
            nombre: nombre,
            apellido: apellido,
            email: email,
            fecha_registro: admin.firestore.Timestamp.now(),
            contrasena: password
        })
        res.status(200).send({ msg: "Se registro correctamente" })
    } catch (error) {
        res.status(400).send({ msg: error })
    }
}

module.exports.logIn = async (req, res) => {
    try {
        const { email, password } = req.body

        const userRef = db.collection('usuarios')
        const userObtained = await userRef.where('email', '==', email).get()

        if (userObtained.docs.length > 0) {
            if (userObtained.docs[0].data().contrasena === password) {
                res.status(200).send({ msg: "Se Ingreso correctamente" })
            } else {
                res.status(400).send({ msg: "No se encontro al usuario" })
            }
        } else {
            res.status(400).send({ msg: "No se encontro al usuario" })
        }

    } catch (error) {
        res.status(400).send({ msg: error })
    }
}

module.exports.update = async (req, res) => {
    try {
        const { email, apellido, nombre, password, emailActual } = req.body
        let isValid = true
        let errors = []
        if (!nombre || !apellido || !email || !password)
            return res.status(400).send({ msg: "Necesitas ingresar todos los datos" })

        if (!validator.isEmail(email)) {
            errors.push({ column: "Email" })
            isValid = false
        }

        if (!validator.isStrongPassword(password)) {
            errors.push({ column: "Password" })
            isValid = false
        }

        if (!validator.matches(nombre, /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/)) {
            errors.push({ column: "Nombre" })
            isValid = false
        }

        if (!validator.matches(nombre, /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/)) {
            errors.push({ column: "Apellido" })
            isValid = false
        }


        const userObtained = await db.collection('usuarios').where('email', '==', email).get()

        if (!(emailActual === email) && userObtained.docs.length > 0) {
            errors.push({ column: "Email" })
            isValid = false
        }

        if (!isValid)
            return res.status(400).send({ errors: errors })

        const userRef = await db.collection('usuarios').where('email', '==', emailActual).get()
        await userRef.docs[0].ref.update({
            nombre: nombre,
            apellido: apellido,
            email: email,
            contrasena: password
        })
        res.status(200).send({ msg: "Se registro correctamente" })
    } catch (error) {
        res.status(400).send({ msg: error })
    }
}

module.exports.findUser = (req, res) => {
    res.send('api working here...');
}

module.exports.findUsers = (req, res) => {
    res.send('api working here...');
}