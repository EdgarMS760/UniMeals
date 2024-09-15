const { db } = require('../firebase')
const admin = require('firebase-admin')
const validator = require('validator')

module.exports.create = async (req, res) => {
    try {
        const { nombre, imageUrl, descripcion, idOwner, categoria, ubicacion, startDate, finishDate } = req.body
        let isValid = true
        let errors = []

        if (!nombre || !imageUrl || imageUrl.length <= 0 || !descripcion || !idOwner || !categoria || categoria.length <= 0 || !ubicacion || ubicacion.length <= 0)
            return res.status(400).send({ msg: "Necesitas ingresar todos los datos" })


        if (!validator.isDecimal(req.body.precio)) {
            errors.push({ column: "Precio" })
            isValid = false

        }

        if (!validator.matches(nombre, /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/)) {
            errors.push({ column: "Nombre" })
            isValid = false
        }

        if (!validator.matches(descripcion, /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/)) {
            errors.push({ column: "Descripcion" })
            isValid = false
        }

        if (!isValid)
            return res.status(400).send({ errors: errors })

        const precio = Number(req.body.precio)
        const dateString = "2024-09-15T14:00:00Z"; // ISO 8601 format (recommended)
        const dateStart = new Date(dateString);

        const productRef = db.collection('productos').doc()
        await productRef.set({
            nombre: nombre,
            imageUrl: imageUrl,
            descripcion: descripcion,
            ubicación: ubicacion,
            fecha_subida: admin.firestore.Timestamp.now(),
            precio: precio,
            idOwner: idOwner,
            nameCategoria: categoria,
            startDate: admin.firestore.Timestamp.fromDate(new Date(startDate)),
            finishDate: admin.firestore.Timestamp.fromDate(new Date(finishDate)),
            status: "A"
        })

        res.status(200).send({ msg: "Se creo un producto correctamente" })
    } catch (error) {
        res.status(400).send({ msg: error })
        console.log(error)
    }
}

module.exports.update = async (req, res) => {
    try {
        const { nombre, imageUrl, descripcion, categoria, ubicacion, idProducto, status, startDate, finishDate } = req.body
        let isValid = true
        let errors = []

        if (!nombre || !imageUrl || imageUrl.length <= 0 || !descripcion || !categoria || categoria.length <= 0 || !ubicacion || ubicacion.length <= 0)
            return res.status(400).send({ msg: "Necesitas ingresar todos los datos" })


        if (!validator.isDecimal(req.body.precio)) {
            errors.push({ column: "Precio" })
            isValid = false

        }

        if (!validator.matches(nombre, /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/)) {
            errors.push({ column: "Nombre" })
            isValid = false
        }

        if (!validator.matches(descripcion, /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/)) {
            errors.push({ column: "Descripcion" })
            isValid = false
        }

        if (!isValid)
            return res.status(400).send({ errors: errors })

        const precio = Number(req.body.precio)

        const productRef = await db.collection('productos').doc(idProducto).get()


        await productRef.ref.update({
            nombre: nombre,
            imageUrl: imageUrl,
            descripcion: descripcion,
            ubicación: ubicacion,
            fecha_subida: admin.firestore.Timestamp.now(),
            precio: precio,
            nameCategoria: categoria,
            status: status,
            startDate: admin.firestore.Timestamp.fromDate(new Date(startDate)),
            finishDate: admin.firestore.Timestamp.fromDate(new Date(finishDate))
        })

        res.status(200).send({ msg: "Se actualizo correctamente" })
    } catch (error) {
        res.status(400).send({ msg: error })
        console.log(error)
    }
}

module.exports.updateStatus = async (req, res) => {
    try {
        const { status, idProducto } = req.body

        const productRef = await db.collection('productos').doc(idProducto).get()


        await productRef.ref.update({
            status: status
        })

        res.status(200).send({ msg: "Se actualizo correctamente" })
    } catch (error) {
        res.status(400).send({ msg: error })
        console.log(error)
    }
}

module.exports.findProduct = async (req, res) => {
    try {
        const idProducto = req.query.idProducto
        const productosRef = await db.collection('productos').doc(idProducto).get();
        return res.status(200).send({ producto: productosRef })
    } catch (error) {
        res.status(400).send({ msg: error })
    }
}

module.exports.findProducts = async (req, res) => {
    try {
        const productosRef = await db.collection('productos').get();
        return res.status(200).send({ productos: productosRef.data() })
    } catch (error) {
        res.status(400).send({ msg: error })
    }
}

module.exports.findProductsUser = async (req, res) => {
    try {
        const idUser = req.query.idUser
        const productosRef = await db.collection('productos').where("idOwner", "==", idUser).get();
        return res.status(200).send({ productos: productosRef.docs })
    } catch (error) {
        res.status(400).send({ msg: error })
    }
}

module.exports.filterProducts = async (req, res) => {
    try {
        const ubicacion = req.query.ubicacion
        const categoria = req.query.categoria
        console.log(categoria)

        const productosRef = await db.collection('productos').get();
        const validProduct = productosRef.docs.filter((producto) => {

            if (ubicacion && categoria && ubicacion.length > 0 && categoria.length > 0) {
                if ((producto.data().nameCategoria === categoria) && (producto.data().ubicación === ubicacion)) {
                    return true
                }

            } else {
                if (categoria && categoria.length > 0 && producto.data().nameCategoria === categoria) {
                    return true
                }

                if (ubicacion && ubicacion.length > 0 && producto.data().ubicación === ubicacion) {
                    return true
                }

            }


            return false

        })
        return res.status(200).send({ productos: validProduct })
    } catch (error) {
        res.status(400).send({ msg: error })
    }
}