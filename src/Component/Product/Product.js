import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css';

const Product = ( props ) => {
    const{ img, name, price } = props.product;
    return (
        <div className="product-details">
            
            <div className="image">
                <img src={img} alt=""/>
            </div>
            <div className="details">
                <p>{name}</p>
                <p><strong>price</strong>: {price}</p>
                <button 
                    onClick = {() => props.handleAddEvent(props.product)}
                    className="main-button" >
                         <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart
                </button>
            </div>
        </div>
    );
};

export default Product;