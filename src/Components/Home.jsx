import React, { useEffect } from "react";
import { ThemeContext } from "./Context";
import { useHistory } from "react-router-dom";
import { Button } from "react-rainbow-components";
import { auth } from "../services/firebase";

const Home = () => {
  const history = useHistory();
  useEffect(() => {
    if (auth.currentUser) {
      history.push("/user");
    }
  }, []);

  return (
    <div>
      <Button
        onClick={(e) => history.push("/signup")}
        label="Signup"
        variant="border-inverse"
      />
      <Button
        onClick={(e) => history.push("/login")}
        label="Login"
        variant="success"
      />
      <Button
        onClick={(e) => history.push("/user")}
        label="User"
        variant="destructive"
      />
      <Button
        onClick={(e) => history.push("/about")}
        label="About"
        variant="outline-brand"
      />
      <h1 style={{ textAlign: "center", margin: "100px auto 100px auto" }}>
        Loading....😴😕🚀
      </h1>
    </div>
  );
};

Home.contextType = ThemeContext;

export default Home;
