import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm); 
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch(); 
        }
    };

    return (
        <div className="flex items-center gap-2 mx-2">
            <InputText 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                placeholder="Buscar..." 
                onKeyDown={handleKeyDown} 
                className="w-full p-inputtext-lg"
            />
            
        </div>
    );
};
