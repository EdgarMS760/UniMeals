import React from 'react';
import PropTypes from 'prop-types';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Componente para la Card
const Card = ({ title, lastMessage, rating, timestamp }) => {
    // Función para generar las estrellas del rating
    const renderStars = () => {
        const stars = Array(5).fill(0).map((_, index) => {
            if (index < Math.floor(rating)) {
                return <FaStar key={index} className="text-yellow-500" />;
            } else if (index < rating) {
                return <FaStarHalfAlt key={index} className="text-yellow-500" />;
            } else {
                return <FaRegStar key={index} className="text-gray-300" />;
            }
        });

        return stars;
    };

    // Formato de la fecha
    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    };

    return (
        <div>
            <Link to="/room">
                <div>
                    <div className="relative bg-primary text-white rounded-lg p-4 max-w-sm mx-auto mb-3">
                        {/* Rating en la esquina superior derecha */}
                        <div className="absolute top-2 right-2 flex items-center space-x-1">
                            <div className="flex">{renderStars()}</div>
                            <span className="ml-2 text-sm">{rating.toFixed(1)}</span>
                        </div>
                        {/* Contenido de la card */}
                        <h2 className="text-xl font-bold mb-2">{title}</h2>
                        <p className="text-base mb-2">{lastMessage}</p>
                        <span className="text-sm">{formatTimestamp(timestamp)}</span>
                    </div>
                </div>
            </Link>
        </div>

    );
};

// PropTypes para validar las props
Card.propTypes = {
    title: PropTypes.string.isRequired,
    lastMessage: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
};

export default Card;
