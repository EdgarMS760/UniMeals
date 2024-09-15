// src/pages/Chat/ChatRoom.jsx
import React, { useState } from 'react';
import MessageList from './MessegeList';
import Header from './Header';
import RatingModal from './RatingModal'

const ChatRoom = () => {
    const [message, setMessage] = useState('');
    const [isModalOpen, setModalOpen] = useState(false);
    const [isProductActive, setProductActive] = useState(true); // Estado para la actividad del producto

    const handleSend = () => {
        if (isProductActive) {
            console.log('Message sent:', message);
            setMessage('');
        } else {
            console.log('Cannot send message. Product is inactive.');
        }
    };

    return (
        <div className="max-w-md mx-auto p-4 flex flex-col h-screen">
            <Header
                title="Pizza Dog"
                location="FCFM"
                rating={2.1}
                onRateClick={() => setModalOpen(true)}
            />
            <div className="flex-grow mb-4 flex flex-col">
                <MessageList />
            </div>
            <div className="flex items-center border-t border-gray-300 pt-2">
                {isProductActive ? (
                    <>
                        <input
                            type="text"
                            className="flex-grow border rounded-full py-2 px-4"
                            placeholder="Enviar mensaje"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button
                            className="ml-2"
                            onClick={handleSend}
                        >
                            <i className="fas fa-paper-plane text-2xl"></i>
                        </button>
                    </>
                ) : (
                    <span className="text-gray-600 text-xl items-center">Producto inactivo</span>
                )}
            </div>
            <RatingModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );
};

export default ChatRoom;
