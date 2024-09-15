import React, { useState } from 'react'
import { ProductCard } from '../components/ProductCard';
import { FilterDropdown } from '../components/FilterDropdown';
import { SortDropdown } from '../components/SortDropdown';
import { ProductViewModal } from '../components/ProductViewModal';

export const ListProducts = () => {
    const products = [
        {
            id: 1,
            image: 'https://www.themealdb.com/images/media/meals/1529444830.jpg', // Ensalada
            title: 'Ensalada César',
            location: 'New York',
            rating: 4.5,
            description: 'Una deliciosa ensalada fresca con lechuga, aderezo César, queso parmesano y crutones.',
            price: 15,
            startTime: '11:00',
            endTime: '14:00'
        },
        {
            id: 2,
            image: 'https://www.themealdb.com/images/media/meals/xqyyqu1511644470.jpg', // Pizza
            title: 'Pizza Margarita',
            location: 'Los Angeles',
            rating: 4.8,
            description: 'Pizza italiana tradicional con una base de salsa de tomate, mozzarella fresca y albahaca.',
            price: 25,
            startTime: '12:00',
            endTime: '22:00'
        },
        {
            id: 3,
            image: 'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg', // Hamburguesa
            title: 'Hamburguesa Clásica',
            location: 'Chicago',
            rating: 4.6,
            description: 'Hamburguesa jugosa con carne de res, queso cheddar, lechuga, tomate y cebolla caramelizada.',
            price: 18,
            startTime: '11:30',
            endTime: '21:00'
        },
        {
            id: 4,
            image: 'https://www.themealdb.com/images/media/meals/qrqywr1503066605.jpg', // Sushi
            title: 'Sushi de Salmón',
            location: 'Houston',
            rating: 4.9,
            description: 'Sushi de salmón fresco servido con wasabi, jengibre encurtido y salsa de soja.',
            price: 30,
            startTime: '12:00',
            endTime: '20:00'
        },
        {
            id: 5,
            image: 'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg', // Burrito
            title: 'Burrito de Pollo',
            location: 'San Francisco',
            rating: 4.4,
            description: 'Tortilla rellena de pollo, arroz, frijoles, queso y guacamole. Una explosión de sabor mexicano.',
            price: 12,
            startTime: '10:00',
            endTime: '18:00'
        },
        {
            id: 6,
            image: 'https://www.themealdb.com/images/media/meals/1548772327.jpg', // Tacos
            title: 'Tacos al Pastor',
            location: 'Dallas',
            rating: 4.7,
            description: 'Deliciosos tacos con carne de cerdo al pastor, piña, cebolla y cilantro, servidos en tortilla de maíz.',
            price: 10,
            startTime: '09:00',
            endTime: '17:00'
        },
        {
            id: 7,
            image: 'https://www.themealdb.com/images/media/meals/wqurxy1511453156.jpg', // Paella
            title: 'Paella Valenciana',
            location: 'Miami',
            rating: 4.9,
            description: 'Auténtica paella valenciana con arroz, mariscos frescos, pollo y verduras.',
            price: 35,
            startTime: '12:00',
            endTime: '19:00'
        },
        {
            id: 8,
            image: 'https://www.themealdb.com/images/media/meals/ysqupp1511640538.jpg', // Pancakes
            title: 'Pancakes de Arándanos',
            location: 'Las Vegas',
            rating: 4.3,
            description: 'Suaves y esponjosos pancakes de arándanos servidos con jarabe de maple y mantequilla.',
            price: 14,
            startTime: '07:00',
            endTime: '11:30'
        },
        {
            id: 9,
            image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg', // Pasta
            title: 'Pasta Alfredo',
            location: 'Orlando',
            rating: 4.8,
            description: 'Cremosa pasta fettuccine Alfredo con salsa de queso parmesano y pollo a la parrilla.',
            price: 20,
            startTime: '11:00',
            endTime: '21:00'
        },
        {
            id: 10,
            image: 'https://www.themealdb.com/images/media/meals/wxuvuv1511299147.jpg', // Ramen
            title: 'Ramen Tradicional',
            location: 'Seattle',
            rating: 4.6,
            description: 'Sopa japonesa de fideos con caldo de cerdo, huevo, algas y vegetales frescos.',
            price: 22,
            startTime: '11:00',
            endTime: '20:00'
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
