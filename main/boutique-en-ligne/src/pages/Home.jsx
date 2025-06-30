import React from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const products = [
        {
            id: 1,
            name: 'Produit 4',
            price: '19.99',
            image: 'url_to_image_1'
        },
        {
            id: 2,
            name: 'Produit 2',
            price: '29.99',
            image: 'url_to_image_2'
        },
        {
            id: 3,
            name: 'Produit 3',
            price: '39.99',
            image: 'url_to_image_3'
        }
    ];

    return (
        <div className="home">
            <h1>Bienvenue dans notre boutique en ligne</h1>
            <div className="product-list">
                {products.map(product => (
                    <ProductCard 
                        key={product.id} 
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;