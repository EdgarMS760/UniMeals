const { db } = require('../firebase')
const admin = require('firebase-admin')

module.exports.create = async (req, res) => {
    try {
        const { nombre, imageUrl, descripcion, email, categoria } = req.body
        const precio = Number(req.body.precio)
        const ubicationE = Number(req.body.ubicationE)
        const ubicationN = Number(req.body.ubicationN)


        const productRef = db.collection('productos').doc()
        await productRef.set({
            nombre: nombre,
            imageUrl: imageUrl,
            descripcion: descripcion,
            ubicación: new admin.firestore.GeoPoint(ubicationN, ubicationE),
            fecha_subida: admin.firestore.Timestamp.now(),
            precio: precio,
            emailUsuario: email,
            nameCategoria: categoria
        })

        res.status(200).send({ msg: "Se creo un producto correctamente" })
    } catch (error) {
        res.status(400).send({ msg: error })
        console.log(error)
    }
}

module.exports.update = (req, res) => {
    res.send('api working here...');
}

module.exports.findProducts = (req, res) => {
    res.send('api working here...');
}

module.exports.filterProducts = (req, res) => {
    res.send('api working here...');
}