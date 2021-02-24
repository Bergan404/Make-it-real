import React from "react";
import { useHistory } from 'react-router-dom';

import './PostProperties.css'

const PostProperties = (posts) => {
    console.log(posts)
    const history = useHistory();

    const handleCartAdd = (e) => {
        e.preventDefault();
        history.push('/shopping-cart')
    }

    return (
        <>
            <div className="big-post" >
                <div>{posts.props.listPicture}</div>
                <h1 className="post-h1" >{posts.props.postTitle}</h1>
                <div className="the-price" >{posts.props.price}</div>
                <button className="add-to-cart-button" onClick={handleCartAdd} >Add To Cart</button>
                <h3 className="highlight-description" >Highlights</h3>
                <div className="post-highlights" >{posts.props.highlights}</div>
                <h3 className="highlight-description" >Description</h3>
                <div className="post-description" >{posts.props.description}</div>
            </div>
        </>
    )
}

export default PostProperties;
