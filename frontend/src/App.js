import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomeListing from "./components/RecentHomeListings";
import AllHomeListing from "./components/AllHomeListings"
import Categories from './components/Categories'
import HomePage from './components/HomePage/HomePage'
import ProfilePage from './components/Profile/index'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
console.log(isLoaded)
  return (
    <>
      <Navigation isLoaded={isLoaded} />
        <Switch>
          <Route path="/" exact component={HomePage} />

          <Route path="/profile/:username" component={ProfilePage} />

        </Switch>
    </>
  );
}

export default App;
