import { csrfFetch } from './csrf';

const MAKE_POST = "MAKE_POST";
const GET_POST = "GET_POST";

export const makePost = (post) => {
    return {
        type: MAKE_POST,
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
export default function reducer(state = {posts:{}}, action){
    switch(action.type) {
        case MAKE_POST:
            return action.post
        default:
            return state;
    }
}
