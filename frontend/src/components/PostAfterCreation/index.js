import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getThePost, makePost } from "../../store/CreatePosts";
import PostProperties from '../PostProperties/index';
import CommentsProperties from '../Comments/Comments'

function PostOpened(props) {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    let id = Number(window.location.pathname[window.location.pathname.length-1])
    const posts = useSelector(state => state.makePost) || []


    useEffect(() => {
        if (sessionUser) {
            dispatch(getThePost(sessionUser.id))
        }
    }, [sessionUser])
    if (!Array.isArray(posts)) {
        return null
    } else {
        const obj = posts.filter((el) => {
            return el.id === id
        }) [0]
        return (
            <>
                <div className="post-opened" >
                    <PostProperties props={obj}/>
                </div>
                <div className="comments">
                    <h2>Reviews</h2>
                    <CommentsProperties />
                </div>
            </>
        );
    }
}


export default PostOpened;
