// src/pages/Chat/MessageList.jsx
import React from 'react';
import Message from './Messege';

const MessageList = () => {
    const messages = [
        { time: '14:05', text: 'Hola, ¿aún tienes disponible?', sender: 'me'},
        { time: '14:07', text: 'Hola, sí, aún tengo disponible', sender: 'edgar'}
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
