import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getThePost } from "../../store/CreatePosts";
import Post from '../Post/index';

import "./ProfilePage.css"

function ProfilePage() {
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
            return <Post props={el} />
        })
        return (
            <>
                <div className="profile-outer" >
                    <h1 className="welcome-letter"> Welcome {sessionUser?.username} </h1>
                    <div className="profile-layout" >
                        {elements}
                    </div>
                </div>
            </>
        );
    }
}

export default ProfilePage;
