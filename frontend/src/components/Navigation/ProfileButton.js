import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom'

import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const {username} = useSelector(state => state.session.user)
  console.log(username)

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

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
      {/* {showMenu && (
        <ul className="profile-dropdown">
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>
      )} */}
    </>
  );
}

export default ProfileButton;
