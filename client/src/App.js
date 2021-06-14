import React from "react";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { useContext } from "react";
import { Context } from "./context/Context";

// TopBar stays on every page. Need to switch between other components.
// Instructions here: https://reactrouter.com/web/guides/quick-start
// route path1 - if there is a user, go to home page, if not, go to register
// route path2 - if there is a user, go to home page, if not, go to login
// route path3 -  if there is a user, go to write page, if not, go to register page
// route path4 -  if there is a user, go to settings page, if not, go to register page
// no condition needed for single page
function App() {
  const { user }= useContext(Context); 
  return (
    <Router>
      <TopBar />
      <Switch>
      <Route exact path="/">
            <Home />
      </Route>
      <Route path="/register">{user ? <Home /> : <Register />}</Route>
      <Route path="/login">{user ? <Home /> : <Login />}</Route>
      <Route path="/write">{user ? <Write /> : <Register />}</Route>
      <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
      <Route path="/post/:postId">
            <Single />
      </Route>
      </Switch>
    </Router>
  );
}


// function App() {
//  return (
//    <div className="App">
//      blog app
//   </div>
//  );
//}

export default App;
