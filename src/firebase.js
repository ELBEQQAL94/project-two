import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyCGhi7hq3Ulvc7gx5kqA3WHtKlhiXXqsAg",
  authDomain: "psgp-2e275.firebaseapp.com",
  databaseURL: "https://psgp-2e275.firebaseio.com",
  projectId: "psgp-2e275",
  storageBucket: "psgp-2e275.appspot.com",
  messagingSenderId: "683694372394"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const matchesDB  = firebaseDB.ref('matches');
const playersDB  = firebaseDB.ref('players');
const promotionsDB  = firebaseDB.ref('promotions');
export {
  firebase,
  matchesDB,
  playersDB,
  promotionsDB
}
