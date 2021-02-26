import React from 'react';

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
                    <button className="review-button" >Post Review</button>
                </form>
            </div>
        </>
    )
}

export default CommentsProperties;
