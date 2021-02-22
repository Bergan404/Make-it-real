import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import HomeListing from "../RecentHomeListings/index";
import AllHomeListing from "../AllHomeListings/index"
import Categories from '../Categories/index'

function HomePage() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <div className="categories">
        <Categories />
      </div>
      <div className="recent-listings">
        <HomeListing />
      </div>
      <div className="all-home-listings">
        <AllHomeListing />
      </div>
    </>
  );
}

export default HomePage;
