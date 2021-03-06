import firebase from "firebase";

const firbaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  databaseURL: process.env.REACT_APP_DB_URL,
};

// const firebaseApp = firebase.initializeApp(firbaseConfig);
// const auth = firebase.auth();
// const provider = new firebase.auth.GithubAuthProvider();
// const db = firebaseApp.firestore();

export { firbaseConfig };
