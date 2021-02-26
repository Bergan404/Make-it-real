import React from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {addThePost} from '../../store/AddPost'
import {deleteThePost} from '../../store/DeletePost'
import {currentCart, createCartItem} from '../../store/AddPost'

import './PostProperties.css'

const PostProperties = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    let id = Number(window.location.pathname.slice(6))
    console.log(id)
    const sessionUser = useSelector(state => state.session.user.username);
    const userId = useSelector(state => state.session.user.id)
    const allPosts = useSelector(state => state.allPosts)
    const myPost = useSelector(state => state.makePost)
    const cartId = useSelector(state => state.currentCart)

    const handleCartAdd = (e) => {
        e.preventDefault();

        dispatch(addThePost(id))
        dispatch(currentCart(userId))
        dispatch(createCartItem(cartId, id))
        history.push(`/shopping-cart/${sessionUser}`)
    }

    const deletePost = (e) => {
        e.preventDefault();

        dispatch(deleteThePost(id))
        history.push('/')
    }

    if (!Array.isArray(allPosts)) {
        return null
    } else {
        let posts = allPosts.filter((el) => {
            return el.id === id
        })[0]
        if (!posts) {
            posts = myPost.filter((el) => {
                return el.id === id
            })[0]
        }
        return (
            <>
                <div className="big-post" >
                    <div>{posts.listPicture}</div>
                    <h1 className="post-h1" >{posts.postTitle}</h1>
                    <div className="the-price" >{posts.price}</div>
                    <button className="add-to-cart-button" onClick={handleCartAdd} >Add To Cart</button>
                    <h3 className="highlight-description" >Highlights</h3>
                    <div className="post-highlights" >{posts.highlights}</div>
                    <h3 className="highlight-description" >Description</h3>
                    <div className="post-description" >{posts.description}</div>
                    {posts.userId === userId?<button className="delete-button" onClick={deletePost} >Delete</button>: null}
                </div>
            </>
        )
    }
}

export default PostProperties;
