// src/pages/Chat/Header.jsx
import React from 'react';

const Header = ({ title, location, rating, onRateClick }) => {
    // Define un array de estrellas para simplificar la renderización
    const stars = Array(5).fill(0).map((_, index) => {
        if (index < Math.floor(rating)) {
            return 'fa-star';
        } else if (index < rating) {
            return 'fa-star-half-alt';
        } else {
            return 'fa-star';
        }
    });

    return (
        <div className="mb-4">
            <div className="flex justify-center items-center mb-4">
                <h1 className="text-5xl font-pacifico">{title}</h1>
            </div>
            <div className="flex justify-between items-center mb-4">
                <button
                    className="bg-secondary text-white py-1 px-4 rounded-full"
                    onClick={onRateClick}
                >
                    Calificar
                </button>
                <div className="flex items-center rating">
                    <i className="fas fa-map-marker-alt text-blue-500"></i>
                    <span className="bg-purple-600 text-white py-1 px-2 rounded-full ml-2">{location}</span>
                    <div className="flex items-center ml-2">
                        {stars.map((star, index) => (
                            <i
                                key={index}
                                className={`fas ${star} ${rating > index ? 'text-yellow-500' : 'text-gray-300'}`}
                            ></i>
                        ))}
                        <span className="ml-1">{rating.toFixed(1)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
