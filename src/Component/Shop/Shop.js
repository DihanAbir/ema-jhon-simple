import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {

    const fake20 = fakeData.slice(0,20);
    const [products, setProducts] = useState(fake20);
    const [cart, setCart] = useState([]);


    const handleAddEvent = (product) => {
        console.log("product added");
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className= "mainsection">
            <div className="suggestion">

            </div>
            <div className="product">
                {
                    products.map(pd => <Product 
                            handleAddEvent = {handleAddEvent}
                            product = {pd} >

                        </Product> )
                }
                
            </div>
            <div className="cartSection">
               <Cart cart = {cart}>

               </Cart>
            </div>
        </div>
    );
};

export default Shop;