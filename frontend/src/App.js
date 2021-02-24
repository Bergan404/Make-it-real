import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from './components/HomePage/HomePage'
import ProfilePage from './components/Profile/index'
import Posts from "./components/CreatePost/CreatePost"
import PostOpened from './components/PostAfterCreation/index'
import ShoppingCart from './components/ShoppingCart/ShoppingCart'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
// console.log(isLoaded)
  return (
    <>
      <Navigation isLoaded={isLoaded} />
        <Switch>
          <Route path="/" exact component={HomePage} />

          <Route path="/profile/:username" component={ProfilePage} />

          <Route path="/create-post" component={Posts}/>

          <Route path="/post" component={PostOpened}/>

          <Route path="/shopping-cart" component={ShoppingCart}/>

        </Switch>
    </>
  );
}

export default App;
