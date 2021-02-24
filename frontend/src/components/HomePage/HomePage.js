import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import AllHomeListing from "../AllHomeListings/index"
import Categories from '../Categories/index'
import {getThePost} from '../../store/AllPosts'

function HomePage() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(getThePost())
  }, [dispatch]);

  return (
    <>
      <div className="categories">
        <Categories />
      </div>
      <div className="all-home-listings">
        <AllHomeListing />
      </div>
    </>
  );
}

export default HomePage;
