import { csrfFetch } from './csrf';

const GET_ALL_POST = "GET_All_POST";

export const getPost = (posts) => {
    return {
        type: GET_ALL_POST,
        posts,
    }
}

export const getThePost = () => async dispatch => {
    const response = await csrfFetch(`/api/posts/`);

    if ( response.ok) {
        const posts = await response.json();
        dispatch(getPost(posts))
    } else {
        console.log(response)
    }
}

export default function reducer(state = {posts:{}}, action){
    switch(action.type) {
        case GET_ALL_POST:
            return action.posts
        default:
            return state;
    }
}
