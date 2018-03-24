import firebase from "firebase";
// Set the configuration for your app
// TODO: Replace with your project's config object
const config = {
  apiKey: "AIzaSyCABAQzRVag8tUeJIgP1exFvtCnl4ZteKo",
  authDomain: "bartercoin-16b5c.firebaseapp.com",
  databaseURL: "https://bartercoin-16b5c.firebaseio.com/",
  storageBucket: "bartercoin-16b5c.appspot.com"
};
const app = firebase.initializeApp(config);

// Get a reference to the database service
const database = firebase.database();

export { app, database };
