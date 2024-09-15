const { db } = require('../firebase')
const admin = require('firebase-admin')

module.exports.send = async (req, res) => {
    try {
        const { idSender, message, idChat } = req.body
        const chatRef = db.collection('chats').doc(idChat);

        const mensajesRef = chatRef.collection('mensajes').doc();

        await mensajesRef.set({
            idSender: idSender,
            message: message,
            timestamp: admin.firestore.Timestamp.now()
        });

        res.status(200).send({ msg: "Se envio un mensaje correctamente" })

    } catch (error) {
        res.status(400).send({ msg: error })
    }
}

module.exports.findMessages = async (req, res) => {
    try {
        const idChat = req.params.idChat

        const chatRef = await db.collection('chats').doc(idChat);
        const mensajesRef = await chatRef.collection('mensajes').get();

        return res.status(200).send({ mensajes: mensajesRef.docs })

    } catch (error) {
        res.status(400).send({ msg: error })
    }
}
