import React from 'react'
import { ProductCard } from '../components/ProductCard';

export const ListProducts = ({}) => {
    const products = [
        {
            image: 'https://placehold.co/20',
            title: 'Producto 1',
            location: 'FCFM',
            rating: 4.5,
            description: 'Descripción Descripción Descripció nDescripci ónDescr ipciónDescripciónD escripc iónDes cripci ónDesc ripciónDescripción',
        },
        {
            image: 'https://placehold.co/20',
            title: 'Producto 2',
            location: 'FCFM',
            rating: 4.8,
            description: 'DescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripción',
        },
        {
            image: 'https://placehold.co/20',
            title: 'Producto 3',
            location: 'FCFM',
            rating: 4.8,
            description: 'DescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripción',
        },
        {
            image: 'https://placehold.co/20',
            title: 'Producto 4',
            location: 'FCFM',
            rating: 4.8,
            description: 'DescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripción',
        },
        {
            image: 'https://placehold.co/20',
            title: 'Producto 5',
            location: 'FCFM',
            rating: 4.8,
            description: 'DescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripción',
        }
    ];
  return (
    <div className="md:flex flex-col items-center p-4 mt-16 ">
    {products.map((product, index) => (
        <ProductCard key={index} product={product} />
    ))}
</div>
  )
}
