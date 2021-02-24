import React from "react";
import { NavLink } from "react-router-dom";

import './Post.css';

const Post = (props) => {
    console.log(props)

    return (
        <>
            <div className="post-content">
                <NavLink to={`/post/${props.props.id}`}>
                    <div>{props.props.postTitle}</div>
                    <div>{props.props.price}</div>
                </NavLink>
            </div>
        </>
    )
}

export default Post;
