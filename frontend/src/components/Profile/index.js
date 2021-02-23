import React from 'react';
import {useSelector} from 'react-redux';

import "./ProfilePage.css"

function ProfilePage() {
  const sessionUser = useSelector(state => state.session.user)
//

    return(
        <>
            <h1 className="welcome-letter"> Welcome {sessionUser?.username} </h1>
            <div className="profile-layout" >

            </div>
        </>
    );
}

export default ProfilePage;
