const { db } = require('../firebase')
const admin = require('firebase-admin')

module.exports.create = async (req, res) => {
    try {
        const { idSender, idReceiver, idProducto } = req.body

        const chatObtained = await db.collection('chats').where('product_id', '==', idProducto).get()

        if (chatObtained.docs.length > 0) {

            for (const chat of chatObtained.docs) {
                if (chat.data().idSender === idSender) {
                    await chat.ref.update({ status: "A" })
                    return res.status(200).send({ msg: "Se activo el chat", idChat: chat.id })
                }
            }

        }

        const chatRef = db.collection('chats').doc()
        await chatRef.set({
            idSender: idSender,
            idReceiver: idReceiver,
            inicio: admin.firestore.Timestamp.now(),
            status: "A",
            product_id: idProducto
        })


        res.status(200).send({ msg: "Se creo un chat correctamente" })

    } catch (error) {
        res.status(400).send({ msg: error })
    }
}

module.exports.findChats = async (req, res) => {
    try {
        const idUser = req.params.idUser

        const chatRef = await db.collection('chats').get()
        const validChat = chatRef.docs.filter((chat) => {
            if (chat.data().idReceiver === idUser) {
                return true
            }

            if (chat.data().idSender === idUser) {
                return true
            }

            return false

        })

        return res.status(200).send({ chat: validChat })

    } catch (error) {
        res.status(400).send({ msg: error })
    }
}

module.exports.findChat = async (req, res) => {
    try {
        const idChat = req.params.idChat

        const chatRef = await db.collection('chats').doc(idChat).get();

        return res.status(200).send({ chat: chatRef })

    } catch (error) {
        res.status(400).send({ msg: error })
    }
}