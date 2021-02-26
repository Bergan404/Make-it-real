import { csrfFetch } from './csrf';

const ADD_POST = "ADD_POST";
const MAKE_CART = "MAKE_CART";

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

export const addThePost = (id) => async dispatch => {
    const response = await csrfFetch(`/api/shopping-cart/${id}`);

    if (response.ok) {
        const post = await response.json();
        dispatch(addPost(post))
    } else {
    }
}

export const createCart = (userId) => async dispatch => {
    const res = await csrfFetch(`/api/shopping-cart/${userId}`, {
        method: 'post',
        // headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({userId})
    })
    const data = await res.json();
    if (res.ok) {
        dispatch(makeCart(data))
        return data
    }
}

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
