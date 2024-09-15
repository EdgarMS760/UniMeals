import React, { useState } from 'react';
import { ProductCreateModal } from './ProductCreateModal';
import { Link } from 'react-router-dom';

const BottomNavbar = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showCreateModal = () => {
        setIsModalVisible(true);
    };

    const hideCreateModal = () => {
        setIsModalVisible(false);
    };

    const handleSave = (productData) => {
        // Lógica para guardar el producto
        console.log('Product data:', productData);
        // Puedes realizar una llamada a una API o actualizar el estado global aquí
        hideCreateModal(); // Oculta el modal después de guardar el producto
    };

    return (
        <>
            <ProductCreateModal
                visible={isModalVisible}
                onHide={hideCreateModal}
                onSave={handleSave}
            />
            <nav className="bg-white shadow-lg fixed bottom-0 w-full flex justify-around items-center p-4">
                <div className="flex flex-col items-center">
                    <Link to="/inicio">
                        <i className='pi pi-home' style={{ fontSize: '1.5rem' }}></i>
                    </Link>
                </div>

                <div className="flex flex-col items-center">
                    <i className='pi pi-plus-circle' style={{ fontSize: '1.5rem' }} onClick={showCreateModal}></i>
                </div>

                <div className="flex flex-col items-center">
                    <Link to="/chat">
                        <i className='pi pi-comments' style={{ fontSize: '1.5rem' }}></i>
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default BottomNavbar;
