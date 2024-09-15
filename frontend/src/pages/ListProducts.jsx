import React, { useState } from 'react'
import { ProductCard } from '../components/ProductCard';
import { FilterDropdown } from '../components/FilterDropdown';
import { SortDropdown } from '../components/SortDropdown';
import { ProductViewModal } from '../components/ProductViewModal';

export const ListProducts = () => {
    const products = [
        {
            id: 1,
            image: 'https://via.placeholder.com/150',
            title: 'Product 1',
            location: 'New York',
            rating: 4.5,
            description: 'This is a brief description of Product 1. It provides a brief overview of the product features and specifications.',
            price: 29,
            startTime: '09:15', // Hora de inicio en formato HH:mm
            endTime: '12:30'    // Hora de fin en formato HH:mm
        },
        {
            id: 2,
            image: 'https://via.placeholder.com/150',
            title: 'Product 2',
            location: 'Los Angeles',
            rating: 4.0,
            description: 'Product 2 is an excellent choice for those looking for quality and affordability. It comes with various features and options.',
            price: 39,
            startTime: '10:00',
            endTime: '18:00'
        },
        {
            id: 3,
            image: 'https://via.placeholder.com/150',
            title: 'Product 3',
            location: 'Chicago',
            rating: 4.7,
            description: 'An outstanding product with great reviews. Product 3 offers exceptional value and is highly recommended by users.',
            price: 49,
            startTime: '08:30',
            endTime: '20:00'
        },
        {
            id: 4,
            image: 'https://via.placeholder.com/150',
            title: 'Product 4',
            location: 'Houston',
            rating: 3.8,
            description: 'Product 4 is a good option if you are looking for a budget-friendly choice. It provides essential features and functionalities.',
            price: 19,
            startTime: '11:45',
            endTime: '15:30'
        },
        {
            id: 5,
            image: 'https://via.placeholder.com/150',
            title: 'Product 5',
            location: 'San Francisco',
            rating: 4.2,
            description: 'A versatile product suitable for various uses. Product 5 is known for its durability and high performance.',
            price: 59,
            startTime: '09:00',
            endTime: '17:00'
        }
    ];
    const filterOptions = [
        { label: 'Todos los productos', value: 'all' },
        { label: 'Electrónicos', value: 'electronics' },
        { label: 'Ropa', value: 'clothing' },
        { label: 'Hogar', value: 'home' }
    ];
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState(null);
    const [selectedSort, setSelectedSort] = useState(null);

    const handleViewClick = (product) => {
        setSelectedProduct(product);
        setModalVisible(true);
    };


   

    const handleFilterChange = (filter) => {
        console.log('Filtro seleccionado:', filter);
        setSelectedFilter(filter);
    };
    const sortOptions = [
        { label: 'Más reciente', value: 'date_desc' },
        { label: 'Más antiguo', value: 'date_asc' },
        { label: 'Precio: de menor a mayor', value: 'price_asc' },
        { label: 'Precio: de mayor a menor', value: 'price_desc' }
    ];

    const handleSortChange = (sortOption) => {
        console.log('Criterio de ordenación seleccionado:', sortOption);
        setSelectedSort(sortOption);
    };
    return (
        <>
            <div className="md:flex flex-col items-center p-4 my-20 ">
                <div className='flex justify-between -z-10'>

                    <FilterDropdown
                        options={filterOptions}
                        selectedFilter={selectedFilter}
                        onFilterChange={handleFilterChange}
                    />
                    <SortDropdown
                        options={sortOptions}
                        selectedSort={selectedSort}
                        onSortChange={handleSortChange}
                    />
                </div>
                {products.map((product) => (
                    <div key={product.id} onClick={() => handleViewClick(product)}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
            <ProductViewModal
                visible={modalVisible}
                onHide={() => setModalVisible(false)}
                product={selectedProduct}
            />



        </>
    )
}
