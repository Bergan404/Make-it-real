import React from 'react';

const postComment = (e) => {
    e.preventDefault()
}

function CommentsProperties() {
    return (
        <>
            <div className="comment-outer" >
                <form>
                    <textarea
                        className="comment-box"
                        type="textarea"
                        rows="5" cols="80"
                    />
                    <button className="review-button" onClick={postComment}>Post Review</button>
                </form>
            </div>
        </>
    )
}

export default CommentsProperties;
