const { db } = require('../firebase')
const admin = require('firebase-admin')

module.exports.send = async (req, res) => {
    try {
        const { calificacion, idOwner, idProducto, chatId } = req.body
        const productRef = await db.collection('productos').doc(idProducto);

        const calificacionesRef = productRef.collection('calificaciones').doc();

        await calificacionesRef.set({
            calificacion: calificacion,
            idOwner: idOwner,
            fecha: admin.firestore.Timestamp.now()
        });

        const chatRef = await db.collection('chats').doc(chatId);
        res.status(200).send({ msg: "Se envio una calificacion correctamente" })

    } catch (error) {
        res.status(400).send({ msg: error })
    }
}

module.exports.findCalificaciones = async (req, res) => {
    try {
        const idProducto = req.params.idProducto

        const productRef = await db.collection('productos').doc(idProducto);
        const calificacionesRef = await productRef.collection('calificaciones').get();
        let count = 0
        let calStored = 0
        calificacionesRef.docs.forEach(calificacion => {
            calStored += parseInt(calificacion.data().calificacion)
            count++;
        });
        let average = calStored / count;
        return res.status(200).send({ calificacion: average.toString() })
    } catch (error) {
        res.status(400).send({ msg: error })
    }
}
