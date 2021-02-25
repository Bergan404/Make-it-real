import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartProperties from "../ShoppingCartComponents/index"

function ShoppingCart() {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const post = useSelector(state => state.addPost) || [];
    console.log(post)

        return (
            <>
                <div>
                    Beans
                </div>
            </>
        );
    // }
}


export default ShoppingCart;
