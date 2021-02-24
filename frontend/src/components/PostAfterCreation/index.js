import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getThePost } from "../../store/CreatePosts";
import PostProperties from '../PostProperties/index';

function PostOpened() {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const posts = useSelector(state => state.makePost) || []

    useEffect(() => {
        console.log(sessionUser)
        if (sessionUser) {
            dispatch(getThePost(sessionUser.id))
        }
    }, [sessionUser])
    if (!Array.isArray(posts)) {
        return null
    } else {
        const elements = posts.map((el) => {
            return <PostProperties props={el} />
        })
        return (
            <>
                <div>
                    {elements}
                </div>
            </>
        );
    }
}


export default PostOpened;
