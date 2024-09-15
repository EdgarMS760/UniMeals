import React, { useState } from 'react'
import { ProductCard } from '../components/ProductCard';
import { ProductEditModal } from '../components/ProductEditModal';

export const ListProducts = ({}) => {
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
    const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const handleSave = (data) => {
    // Implement save logic here, e.g., update the product in your state or make an API call
    console.log('Product data to save:', data);
  };
  return (
    <>
    <div className="md:flex flex-col items-center p-4 my-20 ">
    {products.map((product) => (
        <div key={product.id} onClick={() => handleEditClick(product)}>
            <ProductCard product={product} />
          </div>
        ))}
</div>

        <ProductEditModal
        visible={modalVisible}
        onHide={() => setModalVisible(false)}
        product={selectedProduct}
        onSave={handleSave}
        />


        </>
  )
}
