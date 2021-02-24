import { csrfFetch } from './csrf';

const MAKE_POST = "MAKE_POST";
const GET_POST = "GET_POST";

export const makePost = (post) => {
    return {
        type: MAKE_POST,
        post,
    }
}

export const getPost = (post) => {
    return {
        type: GET_POST,
        post,
    }
}

export const createPost = (postTitle, description, highlights, listPicture, price, userId) => async dispatch => {
    const res = await csrfFetch("/api/posts/", {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({postTitle, description, highlights, listPicture, price, userId})
    })
    const data = await res.json();
    if (res.ok) {
        dispatch(makePost(data))
    } else {
        console.log(res)
    }
}

export const getThePost = (id) => async dispatch => {
    const response = await csrfFetch(`/api/posts/${id}`);

    if ( response.ok) {
        const posts = await response.json();
        dispatch(getPost(posts))
    } else {
        console.log(response)
    }
}

export default function reducer(state = {posts:{}}, action){
    switch(action.type) {
        case MAKE_POST:
            return action.post
        case GET_POST:
            return action.post
        default:
            return state;
    }
}
