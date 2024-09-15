// src/pages/Chat/MessageList.jsx
import React from 'react';
import Message from './Messege';

const MessageList = () => {
    const messages = [
        { time: '10:15', text: 'Hola, ¿todavía tienes galletas de chispas de chocolate?', sender: 'me' },
        { time: '10:16', text: '¡Hola! Sí, todavía tengo algunas disponibles.', sender: 'edgar' },
        { time: '10:17', text: 'Perfecto, ¿cuántas puedo pedir?', sender: 'me' },
        { time: '10:18', text: 'Puedes pedir hasta dos docenas, ¿cuántas te gustaría?', sender: 'edgar' },
        { time: '10:19', text: 'Genial, me llevaré una docena, ¿cuánto costaría?', sender: 'me' },
        { time: '10:20', text: 'Serían $120 MXN por la docena.', sender: 'edgar' },
        { time: '10:21', text: 'Perfecto, ¿me las podrías apartar? Voy por ellas en 20 minutos.', sender: 'me' }
    ];

    return (
        <div className="flex flex-col overflow-y-auto">
            {messages.map((msg, index) => (
                <Message
                    key={index}
                    time={msg.time}
                    text={msg.text}
                    sender={msg.sender}
                    profilePic={msg.profilePic}
                />
            ))}
        </div>
    );
};

export default MessageList;
