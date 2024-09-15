import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Card } from 'primereact/card';
import { ProductEditModal } from './ProductEditModal';

export const ProductViewModal = ({ visible, onHide, product }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const handleSave = (data) => {
        console.log('Product data to save:', data);
    };
    const handleEditClick = (product) => {
        setModalVisible(true);
    };
    return (
        <>
        <Dialog
            header="Detalles del Producto"
            visible={visible}
            style={{ width: '80vw' }}
            onHide={onHide}
            modal
            >
            {product ? (
                <>
                <Card title={product.title} className="p-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className=" flex justify-center">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-auto object-cover rounded-lg shadow-md"
                                />
                        </div>
                        <div className="md:w-2/3">
                            <div className="field">
                                <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
                                <p className="text-lg mb-2"><strong>Precio:</strong> ${product.price}</p>
                                <p className="text-lg mb-2"><strong>Ubicación:</strong> {product.location}</p>
                                <p className="text-lg mb-2"><strong>Horario:</strong> {product.startTime} - {product.endTime}</p>
                                <p className="text-lg mb-2"><strong>Descripción:</strong> {product.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end mt-4">
                    <button className='text-white bg-secondary p-2 rounded-lg mr-3' onClick={handleEditClick}>
                        Editar
                    </button>
                    <button className="ml-2 bg-danger text-white p-2 rounded-lg" onClick={onHide} type="button">
                        Marcar Inactiva
                    </button>
                </div>
                </Card>
                 <ProductEditModal
                visible={modalVisible}
                onHide={() => setModalVisible(false)}
                product={product}
                onSave={handleSave}
            /> 
                </>
            ) : (
                <p>No hay detalles del producto disponibles.</p>
            )}
        </Dialog>
            </>
    );
};
