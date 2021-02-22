import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignupFormPage'
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);
  const [showCart, setShowCart] = useState(false)

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        {/* <NavLink className="sign-up" to="/signup">Sign Up</NavLink> */}
        <SignUpFormModal />
      </>
    );
  }

  return (
    <ul className="nav-background">
      <li>
        <NavLink className="home-button" exact to="/">Make It Real</NavLink>
        {isLoaded && sessionLinks}
      </li>
      <li className="cart">
        <NavLink className="shopping-cart" exact to="/">
            <img src="./shopping-cart.png" />
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
