import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import AllHomeListing from "../AllHomeListings/index"
import Categories from '../Categories/index'
import {getThePost} from '../../store/AllPosts'
import Welcome from '../WelcomeHome/index'

function HomePage() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(getThePost())
  }, [dispatch]);

  let sessionOn;
  if (sessionUser) {
    sessionOn = (
      <Welcome />
    )
  } else {
    sessionOn =(
      null
    )
  }

  return (
    <>
      <div className="categories">
        <Categories />
      </div>
      {sessionOn}
      <div className="all-home-listings">
        <AllHomeListing />
      </div>
    </>
  );
}

export default HomePage;
