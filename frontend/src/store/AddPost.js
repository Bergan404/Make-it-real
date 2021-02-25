import { csrfFetch } from './csrf';

const ADD_POST = "ADD_POST";

export const addPost = (post) => {
    return {
        type: ADD_POST,
        post,
    }
}

export const addThePost = (id) => async dispatch => {
    const response = await csrfFetch(`/api/shopping-cart/${id}`);

    if (response.ok) {
        const post = await response.json();
        dispatch(addPost(post))
    } else {
        console.log(response)
    }
}

export default function reducer(state = {post:{}}, action){
    switch(action.type) {
        case ADD_POST:
            return action.post
        default:
            return state;
    }
}
