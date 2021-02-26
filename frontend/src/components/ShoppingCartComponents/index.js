import React from "react";
import { NavLink } from 'react-router-dom'

import './ShoppingCart.css'

const CartProperties = (cart) => {

    return (
        <>
            <div className="cart-posts" >
                <NavLink to={`/post/${cart.props.id}`}>
                    <div>{cart.props.postTitle}</div>
                    <div>{cart.props.price}</div>
                </NavLink>
            </div>
        </>
    )
}

export default CartProperties;
