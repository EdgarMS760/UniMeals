import React, { useState } from 'react';

const RatingModal = ({ isOpen, onClose }) => {
    const [rating, setRating] = useState(0);

    const handleStarClick = (index) => {
        setRating(index + 1);
    };

    return (
        <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${isOpen ? 'block' : 'hidden'}`}>
            <div className="bg-white rounded-lg shadow-lg p-6 w-80">
                <h2 className="text-center text-lg font-semibold mb-4">¿Qué tal estuvo la comida?</h2>
                <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, index) => (
                        <button
                            key={index}
                            className={`fas fa-star text-2xl mx-1 ${index < rating ? 'text-yellow-500' : 'text-gray-400'}`}
                            onClick={() => handleStarClick(index)}
                        ></button>
                    ))}
                </div>
                <div className="flex justify-around">
                    <button
                        className="bg-primary text-white py-2 px-4 rounded-full shadow-md"
                        onClick={() => {
                            console.log(`Rated: ${rating} stars`);
                            onClose();
                        }}
                    >
                        Calificar
                    </button>
                    <button
                        className="bg-red-500 text-white py-2 px-4 rounded-full shadow-md"
                        onClick={onClose}
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RatingModal;