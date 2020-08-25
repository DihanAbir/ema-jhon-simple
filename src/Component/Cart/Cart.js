import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // find total price using reduce 
    // const total = cart.reduce( ( total, prd )=> total + prd.price, 0 )

    // fint total price using normal for loop
    let total = 0;
    let shipping =0;
    for ( let i=0; i<cart.length; i++ ){
        total = total + cart[i].price
        shipping = (shipping + cart[i].shipping);
       
    }

    // to conver a number within a 2 point 
    const formatNumber = num =>  {
        const precision = num.toFixed(2);
        return Number(precision) ;
    }


    return (
        <div>
            <h3>Order summery</h3>
            <h4>Selected Item: { cart.length }</h4>
            <p>Items Price: {formatNumber(total)}</p>
            <p>shipping Price: {formatNumber (shipping)}</p>
            
        </div>
    );
};

export default Cart;