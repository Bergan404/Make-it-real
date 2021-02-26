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
import PostProperties from './components/PostProperties/index'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
  return (
    <>
      <Navigation isLoaded={isLoaded} />
        <Switch>
          <Route path="/" exact component={HomePage} />

          <Route path="/profile/:username" component={ProfilePage} />

          <Route path="/create-post" component={Posts}/>

          <Route path="/post" component={PostOpened}/>

          <Route path="/shopping-cart/:username" component={ShoppingCart}/>

          <Route path="/post/:id" component={PostProperties}/>

        </Switch>
    </>
  );
}

export default App;
