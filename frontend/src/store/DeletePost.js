import { csrfFetch } from './csrf';

export const deleteThePost = (id) => async dispatch => {
    const response = await csrfFetch(`/api/posts/delete/${id}`)

    if (response.ok) {
        const post = await response.json();
        return post
    } else {
    }
}
