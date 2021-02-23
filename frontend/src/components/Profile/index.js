import React from 'react';
import { useSelector } from 'react-redux';
// import { post } from '../../../../backend/routes/api';

import "./ProfilePage.css"

function ProfilePage() {
    const sessionUser = useSelector(state => state.session.user)
    const posts = useSelector(state => {
        return state.makePosta
    })

    return (
        <>
            <h1 className="welcome-letter"> Welcome {sessionUser?.username} </h1>
            <div className="profile-layout" >
                <div>{posts}</div>
            </div>
        </>
    );
}

export default ProfilePage;
