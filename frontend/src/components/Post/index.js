import React from "react";

import './Post.css';

const Post = (props) => {
    console.log(props)

    return (
        <>
            <div className="post-content">
                <div>{props.props.postTitle}</div>
                <div>{props.props.price}</div>
            </div>
        </>
    )
}

export default Post;
