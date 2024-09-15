import React, { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';

export const FilterDropdown = ({ options, selectedFilter, onFilterChange }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        if (selectedFilter) {
            setSelectedOption(selectedFilter);
        }
    }, [selectedFilter]);

    const handleFilterChange = (e) => {
        setSelectedOption(e.value);
        onFilterChange(e.value); 
    };

    return (
        <div className="field w-1/3 m-2">
            <label htmlFor="filter-dropdown" className="block mb-2">Filtrar por:</label>
            <Dropdown
                id="filter-dropdown"
                value={selectedOption}
                options={options}
                onChange={handleFilterChange}
                optionLabel="label" 
                placeholder="Seleccione una opción"
                className="w-full"
            />
        </div>
    );
};
