import React from "react";


const PostProperties = (props) => {
    console.log(props)

    return (
        <>
            <div>
                <div>{props.props.postTitle}</div>
                <div>{props.props.description}</div>
                <div>{props.props.highlights}</div>
                <div>{props.props.listPicture}</div>
                <div>{props.props.price}</div>
            </div>
        </>
    )
}

export default PostProperties;
