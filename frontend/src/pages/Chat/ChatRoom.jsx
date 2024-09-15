// src/pages/Chat/ChatRoom.jsx
import React, { useState } from 'react';
import MessageList from './MessegeList';
import Header from './Header';
import RatingModal from './RatingModal'
import TopNavbar from '../../components/TopNavBar';
import logo from '../../assets/img/logoUniEatsNoLetras.png';
import BottomNavbar from '../../components/BottomNavBar';

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
        <div className="flex flex-col h-screen">
            <TopNavbar logo={logo} >
                {/* Puedes pasar más props o contenido al TopNavbar aquí */}
            </TopNavbar>
            <div className="flex-grow flex flex-col p-4 mt-16 bg-white">
                <Header
                    title="Pizza Dog"
                    location="FCFM"
                    rating={2.1}
                    onRateClick={() => setModalOpen(true)}
                />
                <div className="flex-grow mb-4 flex flex-col">
                    <MessageList />
                </div>
            </div>
            <div className="mb-16">
                {/* Contenedor del input y botón */}
                <div className="flex items-center border-gray-200 bg-white p-2">
                    {isProductActive ? (
                        <div className="flex-grow flex items-center">
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
                        </div>
                    ) : (
                        <span className="text-gray-600 text-xl">Producto inactivo</span>
                    )}
                </div>
                <BottomNavbar/> {/* Ajusta el z-index aquí */}
            </div>
            <RatingModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );
};

export default ChatRoom;
