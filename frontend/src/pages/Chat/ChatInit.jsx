import React, { useState } from 'react';
import TopNavbar from '../../components/TopNavBar';
import logo from '../../assets/img/logoUniEatsNoLetras.png';
import BottomNavbar from '../../components/BottomNavBar';
import Card from './Card';

const Section = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-4">
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h2 className="text-2xl font-bold">{title}</h2>
                <i className={`fas fa-caret-${isOpen ? 'up' : 'down'}`}></i>
            </div>
            <div className="border-t border-black my-2"></div>
            {isOpen && children}
        </div>
    );
};

const ChatInit = () => {
    return (
        <div>
            <TopNavbar logo={logo}>
                {/* Puedes pasar más props o contenido al TopNavbar aquí */}
            </TopNavbar>
            <div className="mx-auto p-4 bg-white">
                <div className="flex justify-center items-center mb-4">
                    <h1 className="text-4xl font-semibold">CHAT</h1>
                </div>
                <Section title="Activos">
                    {/* Aquí puedes agregar varios componentes Card dinámicamente */}
                    <Card
                        title="Pizza Dog"
                        lastMessage="Último mensaje en el chat."
                        rating={4.2}
                        timestamp={new Date().toISOString()}
                    />
                    <Card
                        title="Pizza Dog"
                        lastMessage="Último mensaje en el chat."
                        rating={4.2}
                        timestamp={new Date().toISOString()}
                    />
                    <Card
                        title="Pizza Dog"
                        lastMessage="Último mensaje en el chat."
                        rating={4.2}
                        timestamp={new Date().toISOString()}
                    />
                    <Card
                        title="Pizza Dog"
                        lastMessage="Último mensaje en el chat."
                        rating={4.2}
                        timestamp={new Date().toISOString()}
                    />
                    <Card
                        title="Pizza Dog"
                        lastMessage="Último mensaje en el chat."
                        rating={4.2}
                        timestamp={new Date().toISOString()}
                    />
                    <Card
                        title="Burger Queen"
                        lastMessage="Otro mensaje reciente."
                        rating={3.8}
                        timestamp={new Date().toISOString()}
                    />
                </Section>
                <Section title="Inactivos">
                    {/* Aquí puedes agregar varios componentes Card dinámicamente */}
                    <Card
                        title="Sushi Place"
                        lastMessage="Último mensaje en el chat."
                        rating={2.5}
                        timestamp={new Date().toISOString()}
                    />
                    <Card
                        title="Taco Stand"
                        lastMessage="Mensaje antiguo."
                        rating={1.9}
                        timestamp={new Date().toISOString()}
                    />
                </Section>
            </div>
            <BottomNavbar></BottomNavbar>
        </div>
    );
};

export default ChatInit;
