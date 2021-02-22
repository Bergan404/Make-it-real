import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomeListing from "./components/RecentHomeListings";
import AllHomeListing from "./components/AllHomeListings"
import Categories from './components/Categories'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          {/* <Route path="/signup">
            <SignupFormPage />
          </Route> */}
        </Switch>
      )}
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

export default App;
