import React from "react";
import { Card, Button, ButtonIcon } from "react-rainbow-components/";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import ThemeData from "./theme";
import { signInWithGoogle, auth } from "../services/firebase";
// style={style.row}
const SignUp = () => {
  const history = useHistory();
  const handleGithubSignUp = (e) => {
    e.preventDefault();
    console.log(e);
  };
  auth.onAuthStateChanged((user) => {
    if (user) {
      history.push("/user");
    }
  });

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
            <h1 style={style.heading}>SIGNUP</h1>
            <div style={{ visibility: "hidden" }}>_________</div>
          </Grid>
          <img
            src="./assets/lighthouse.svg"
            style={style.poster}
            alt="poster"
          />
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item sm={8} xs={10} lg={8}>
              <form style={style.form}>
                <h2 style={style.title}>Signup with</h2>
                <Button
                  onClick={handleGithubSignUp}
                  variant="border-inverse"
                  className="rainbow-m-around_medium"
                >
                  <i class="ri-github-fill ri-2x"></i>
                  <span style={style.space}></span>
                  Signup With Github
                </Button>
                <br />
                <Button onClick={signInWithGoogle} variant="destructive">
                  <i class="ri-google-line ri-2x"></i>
                  <span style={style.space}></span>
                  Signup With Google
                </Button>
                <p style={style.caption}>Or already have an account ?</p>
                {/* for login page */}
                <Button
                  onClick={(e) => history.push("/login")}
                  label="Login"
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

export default SignUp;
