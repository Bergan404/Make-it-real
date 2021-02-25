import React from "react";

const CartProperties = (cart) => {
    console.log(cart)

    return (
        <>
            <div>
                    <div>{cart.props.postTitle}</div>
                    <div>{cart.props.price}</div>
            </div>
        </>
    )
}

export default CartProperties;
