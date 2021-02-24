import React from "react";

const Post = (props) => {
    console.log(props)

    return (
        <>
            <div>{props.props.postTitle}</div>
            <div>{props.props.price}</div>
        </>
    )
}

export default Post;
