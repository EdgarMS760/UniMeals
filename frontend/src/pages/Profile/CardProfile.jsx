import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const CardProfile = ({ rating }) => {

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
        <div className="w-full flex flex-row align-top border-black border-solid border-2 p-4 rounded-2xl">
            <div className='w-[95%] flex flex-col gap-3 items-center'>
                <h1 className='text-black text-5xl'>edgar</h1>
                <div className="flex items-center rating">
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
            <div className='flex w-3 justify-center align-middle'>
                <NavLink
                    to="/Profile/EditProfile"
                    className="h-full flex justify-center align-middle items-center w-3"
                >
                    <i className="fa-regular fa-pen-to-square fa-2xl" style={{ color: "#000000", }}></i>
                </NavLink>
            </div>
        </div>
    );
};

export default CardProfile;
