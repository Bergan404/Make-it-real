import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getThePost, makePost } from "../../store/CreatePosts";
import PostProperties from '../PostProperties/index';

function PostOpened(props) {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    let id = Number(window.location.pathname[window.location.pathname.length-1])
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
        const obj = posts.filter((el) => {
            return el.id === id
        }) [0]
        console.log(obj)
        return (
            <>
                <div className="post-opened" >
                    <PostProperties props={obj}/>
                </div>
            </>
        );
    }
}


export default PostOpened;
