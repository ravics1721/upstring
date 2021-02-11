import React, { useEffect } from "react";
import { Card, Button, ButtonIcon } from "react-rainbow-components/";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import ThemeData from "./theme";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithGoogle, auth } from "../services/firebase";

const Login = () => {
  const history = useHistory();
  const { user, loading, error } = useAuthState(firebase.auth());
  useEffect(() => {
    if (user) {
      history.push("/user");
    }
    console.log(user);
  }, [history, user]);

  auth.onAuthStateChanged((user) => {
    console.log(user.displayName);
    if (user) {
      history.push("/user");
    }
  });

  function handleGoogleLogin(e) {
    signInWithGoogle();
  }

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item sm={12} xs={12} lg={6}>
        <Card style={style.card}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <ButtonIcon
              onClick={(e) => history.push("/")}
              variant="inverse"
              icon={<i class="ri-arrow-left-line ri-2x"></i>}
            />
            <h1 style={style.heading}>LOGIN</h1>
            <div style={{ visibility: "hidden" }}>_________</div>
          </Grid>
          <img src="./assets/girl.svg" style={style.poster} alt="poster" />
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item sm={8} xs={10} lg={8}>
              <form style={style.form}>
                <h2 style={style.title}>Login with</h2>
                <Button
                  variant="border-inverse"
                  className="rainbow-m-around_medium"
                >
                  <i class="ri-github-fill ri-2x"></i>
                  <span style={style.space}></span>
                  Login With Github
                </Button>
                <br />
                <Button onClick={handleGoogleLogin} variant="destructive">
                  <i class="ri-google-line ri-2x"></i>
                  <span style={style.space}></span>
                  Login With Google
                </Button>
                <p style={style.caption}>Don't have an account ?</p>
                {/* for login page */}
                <Button
                  onClick={(e) => history.push("/signup")}
                  label="Signup"
                  variant="border-inverse"
                  size="small"
                  style={style.bottom}
                />
              </form>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

const theme = ThemeData().Dark;
const style = {
  root: {
    margin: "30px auto 20px auto",
    width: "50%",
  },
  card: {
    backgroundColor: theme.primary,
    marginTop: "2px",
    // height: "98vh",
  },
  form: {
    margin: "1px auto 20px auto",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
  },
  poster: {
    width: "30%",
    height: "200px",
    margin: "0 auto 1px auto",
    display: "flex",
    alignSelf: "center",
  },
  title: {
    color: theme.light,
    margin: "0px auto 30px 10px",
  },
  heading: {
    color: theme.light,
    marginTop: "2px",
    marginBottom: "0",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justify: "space-between",
  },
  caption: {
    color: theme.accent,
    marginTop: "50px",
    textAlign: "center",
  },
  bottom: {
    // margin: "0px auto 30px 100px",
    marginBottom: "30px",
    width: "100px",
    display: "flex",
    alignSelf: "center",
  },
  space: {
    width: "10px",
  },
};

export default Login;
