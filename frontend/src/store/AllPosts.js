import { csrfFetch } from './csrf';

const GET_ALL_POST = "GET_All_POST";
const MERGE_POST = "MERGE_POST";

export const getPost = (posts) => {
    return {
        type: GET_ALL_POST,
        posts,
    }
}

export const mergePost = (post) => {
    return {
        type: MERGE_POST,
        post,
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

export const createPost = (postTitle, description, highlights, listPicture, price, userId) => async dispatch => {
    const res = await csrfFetch("/api/posts/", {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({postTitle, description, highlights, listPicture, price, userId})
    })
    const data = await res.json();
    if (res.ok) {
        dispatch(mergePost(data))
        return data;
    } else {
        console.log(res)
    }
}

export default function reducer(state = {posts:{}}, action){
    switch(action.type) {
        case GET_ALL_POST:
            return action.posts
        case MERGE_POST:
            return [action.post, ...state]
        default:
            return state;
    }
}
