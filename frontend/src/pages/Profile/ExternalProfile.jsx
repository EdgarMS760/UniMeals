import React, { useState } from 'react';
import CardProfile from './CardProfile';

const ExternalProfile = () => {


    return (
        <div className='flex justify-center rounded-lg min-h-screen items-center'>
            <div className='w-full h-full max-w-sm p-4 rounded-lg  flex flex-col items-start'>
                <CardProfile rating={5}></CardProfile>

            </div>
        </div>
    );
};

export default ExternalProfile;
