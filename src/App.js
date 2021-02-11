import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Home from "./Components/Home";
import ChatPage from "./Components/ChatPage";
import UserProvider from "./provider/UserProvider";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/user" component={ChatPage} />
        </Switch>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
