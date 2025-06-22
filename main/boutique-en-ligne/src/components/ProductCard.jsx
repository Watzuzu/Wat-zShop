import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price} €</p>
            <button onClick={() => onAddToCart(product)}>Ajouter au panier</button>
        </div>
    );
};

export default ProductCard;