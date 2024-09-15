import React from 'react';

const Message = ({ time, text, sender }) => {
    const isSender = sender === 'me';

    return (
        <div className={`flex items-center mb-2 ${!isSender ? 'justify-end' : 'justify-start'}`}>
            {/* Para mensajes recibidos */}
            {isSender && (
                <div className="flex items-center mr-2">
                    <div>
                        <span className="text-sm">{sender}</span>
                        <div className="text-xs text-gray-500">{time}</div>
                    </div>
                </div>
            )}
            
            {/* Mensaje */}
            <div className={`py-2 px-4 rounded-full ${isSender ? 'bg-secondary text-white' : 'bg-primary text-white'} ${!isSender ? 'ml-2' : 'mr-2'}`}>
                {text}
            </div>
            
            {/* Para mensajes enviados */}
            {!isSender && (
                <div className="flex-column ml-2">
                    <span className="text-sm mr-4">{sender}</span>
                    <div className="text-xs text-gray-500">{time}</div>
                </div>
            )}
        </div>
    );
};

export default Message;
