import { csrfFetch } from './csrf';

const ADD_POST = "ADD_POST";
const MAKE_CART = "MAKE_CART";
const CURRENT_CART = "CURRENT_CART";

export const addPost = (post) => {
    return {
        type: ADD_POST,
        post,
    }
}

export const makeCart = (cart) => {
    return {
        type: MAKE_CART,
        cart,
    }
}

export const setCurrentCart = (cartId) => {
    return {
        type: CURRENT_CART,
        cartId,
    }
}

export const addThePost = (id) => async dispatch => {
    const response = await csrfFetch(`/api/shopping-cart/${id}`);

    if (response.ok) {
        const post = await response.json();
        dispatch(addPost(post))
    } else {
    }
}

export const createCartItem = (cartId, id) => async dispatch => {
    const res = await csrfFetch(`/api/shopping-cart/${cartId}`, {
        method: 'post',
        // headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({cartId, id})
    })
    const data = await res.json();
    if (res.ok) {
        dispatch(makeCart(data))
        return data
    }
}

export const currentCart = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/shopping-cart/cart/${userId}`)
    const data = await response.json();
    // console.log(data, "------------------------")
    if (response.ok) {
        dispatch(setCurrentCart(data.cart.id))
        return data;
    }

};

export default function reducer(state = [], action){
    switch(action.type) {
        case ADD_POST:
            return[...state, action.post]
        case MAKE_CART:
            return action.post
        default:
            return state;
    }
}

export function reducerTwo(state = [], action){
    let newState;
    switch(action.type) {
        case CURRENT_CART:
            return action.cartId
        default:
            return state;
    }
}
