import React from 'react';

export const ProductCard = ({ product }) => {
    const { image, title, location, rating, description } = product;

    return (
        <div className="flex bg-secondary shadow-lg rounded-lg overflow-hidden max-h-48 m-2 max-w-96">
            <div className="w-1/3 p-3 ">
                <img src={image} alt={title} className="w-full h-full object-cover rounded-lg shadow-xl" />
            </div>
            <div className="w-2/3 p-4">
                <h2 className="text-lg font-bold text-white">{title}</h2>

                <div className="flex items-center text-black my-2">
                    <div className='mr-3'>

                        <i className='pi pi-map-marker'></i>
                        <span>{location}</span>
                    </div>
                    <div>

                        <i className='pi pi-star mr-1' style={{ color: '#E4B21C' }}></i>
                        <span className='text-yellow-500'>{rating}</span>
                    </div>
                </div>

                <div className="flex items-center text-yellow-500 my-2">
                </div>

                <p className="text-white text-xs overflow-hidden text-ellipsis whitespace-nowrap">
                    {description}
                </p>
            </div>
        </div>
    );
};
