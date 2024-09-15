import React, { useState } from 'react';
import { ProductCreateModal } from './ProductCreateModal';

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
                    <i className=' pi pi-home' style={{ fontSize: '1.5rem' }}></i>
                </div>

                <div className="flex flex-col items-center">
                    <i className=' pi pi-plus-circle' style={{ fontSize: '1.5rem' }} onClick={showCreateModal}></i>
                </div>

                <div className="flex flex-col items-center">
                    <i className=' pi pi-comments' style={{ fontSize: '1.5rem' }}></i>
                </div>
            </nav>
        </>
    );
};

export default BottomNavbar;
