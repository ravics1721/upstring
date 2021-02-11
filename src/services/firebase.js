import dotenv from "dotenv";
import firebase from "firebase";
import { Redirect } from "react-router-dom";
import "firebase/auth";
import { firbaseConfig } from "./config";
dotenv.config();

firebase.initializeApp(firbaseConfig);

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  auth
    .signInWithPopup(googleProvider)
    .then((res) => {
      console.log(res.user);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const logout = () => {
  auth
    .signOut()
    .then(() => {
      console.log("logged out");
    })
    .catch((err) => {
      console.log(err.message);
    });
};
