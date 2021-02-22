import { useDispatch, useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom'

import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const {username} = useSelector(state => state.session.user)
  // console.log(username)

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
    <NavLink to={`/profile/${username}`}>
      <button className="profile">
        <i className="fas fa-user-circle" />
      </button>
    </NavLink>
      <button className="logout-button" onClick={logout}>Log Out</button>
      <NavLink className="create-post" to="/">Create Post</NavLink>
    </>
  );
}

export default ProfileButton;
