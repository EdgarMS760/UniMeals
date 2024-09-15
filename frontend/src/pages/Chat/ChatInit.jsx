import React, { useState } from 'react';

// Componente para las secciones desplegables
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
        <div className="max-w-md mx-auto p-4 bg-white">
            <div className="flex justify-center items-center mb-4">
                <h1 className="text-4xl">CHAT</h1>
            </div>
            <Section title="Activos">
                {/* Aquí se pueden agregar los items dinámicamente */}
            </Section>
            <Section title="Inactivos">
                {/* Aquí se pueden agregar los items dinámicamente */}
            </Section>
        </div>
    );
};

export default ChatInit; // Asegúrate de usar export default
