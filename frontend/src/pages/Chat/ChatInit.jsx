import React, { useState } from 'react';
import TopNavbar from '../../components/TopNavBar';
import logo from '../../assets/img/logoUniEatsNoLetras.png';
import BottomNavbar from '../../components/BottomNavBar';
import Card from '../../pages/Chat/Card';

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
            <div className="mx-auto p-4 bg-white mt-16 mb-16">
                <div className="flex justify-center items-center mb-4">
                    <h1 className="text-4xl font-semibold">CHAT</h1>
                </div>
                <Section title="Activos">
                    {/* Aquí puedes agregar varios componentes Card dinámicamente */}
                    <Card
                        title="Pizza Margarita"
                        lastMessage="¿La pizza viene con extra queso sin costo adicional?"
                        rating={4.5}
                        timestamp={new Date().toISOString()}
                    />
                    <Card
                        title="Hamburguesa BBQ"
                        lastMessage="¿Se puede cambiar el tipo de pan por uno integral?"
                        rating={4.2}
                        timestamp={new Date().toISOString()}
                    />
                    <Card
                        title="Tacos al Pastor"
                        lastMessage="¿Los tacos incluyen salsa picante aparte?"
                        rating={4.7}
                        timestamp={new Date().toISOString()}
                    />
                    <Card
                        title="Sushi de Salmón"
                        lastMessage="¿El sushi viene con alguna guarnición incluida?"
                        rating={4.3}
                        timestamp={new Date().toISOString()}
                    />
                    <Card
                        title="Burrito de Pollo"
                        lastMessage="¿El burrito tiene opción de agregar aguacate?"
                        rating={4.0}
                        timestamp={new Date().toISOString()}
                    />
                </Section>

                <Section title="Inactivos">
                    {/* Aquí puedes agregar varios componentes Card dinámicamente */}
                    <Card
                        title="Ensalada César"
                        lastMessage="¿La ensalada viene con aderezo aparte?"
                        rating={3.8}
                        timestamp={new Date().toISOString()}
                    />
                    <Card
                        title="Hot Dog Clásico"
                        lastMessage="¿Puedo agregar jalapeños al hot dog?"
                        rating={3.6}
                        timestamp={new Date().toISOString()}
                    />
                </Section>


            </div>
            <BottomNavbar></BottomNavbar>
        </div>
    );
};

export default ChatInit;
