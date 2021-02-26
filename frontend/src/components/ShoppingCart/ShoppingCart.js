import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartProperties from '../ShoppingCartComponents/index'

function ShoppingCart() {
    // const dispatch = useDispatch()
    const addPost = useSelector(state => state.addPost)
    const items = useSelector(state => state.addPost)
    console.log(items)
    let total = 0;
    const itemTotal = items.forEach(item => {
        let itemPrice = item.price.slice(1);
        total = total + +itemPrice
        return total
    })

    if (!Array.isArray(addPost)) {
        return null
    } else {
        const ele = addPost.map((el, i) => {
            return <CartProperties key={i} props={el} />
        })
        return (
            <>
                <div className="cart-posts-outer-div" >
                    <h1>Shopping Cart</h1>
                    {ele}
                    <div className="line" />
                    <h3>Total: ${total}</h3>
                </div>
            </>
        );
    }
}

export default ShoppingCart;
