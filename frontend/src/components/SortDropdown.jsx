import React, { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';

export const SortDropdown = ({ options, selectedSort, onSortChange }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    // Actualiza el estado interno cuando cambia el criterio de ordenación externamente
    useEffect(() => {
        if (selectedSort) {
            setSelectedOption(selectedSort);
        }
    }, [selectedSort]);

    const handleSortChange = (e) => {
        setSelectedOption(e.value);
        onSortChange(e.value);
    };

    return (
        <div className="field w-1/3 m-2">
            <label htmlFor="sort-dropdown" className="block mb-2">Ordenar por</label>
            <Dropdown
                id="sort-dropdown"
                value={selectedOption}
                options={options}
                onChange={handleSortChange}
                optionLabel="label" 
                placeholder="Seleccione un criterio de ordenación"
                className="w-full z-0"
            />
        </div>
    );
};
