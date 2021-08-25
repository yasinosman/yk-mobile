//ignore firebase timer warnings
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Setting a timer']);

import firebase from 'firebase/app';
// Optionally import the services that you want to use
import 'firebase/auth';
//import "firebase/database";
import 'firebase/firestore';
//import "firebase/functions";
// import 'firebase/storage';

(function () {
  // Initialize Firebase
  const firebaseConfig = {
    apiKey: 'AIzaSyABvJ7I6yCf-b8FidWxsJuw01OR5TkQ9KM',
    authDomain: 'yk-mobile-7ce20.firebaseapp.com',
    projectId: 'yk-mobile-7ce20',
    storageBucket: 'yk-mobile-7ce20.appspot.com',
    messagingSenderId: '757983497368',
    appId: '1:757983497368:web:5dd504012c79ca855494ed',
  };

  try {
    firebase.initializeApp(firebaseConfig);
    console.log('Firebase connection initialized');
  } catch (error) {
    //App already exists
  }
})();

const db = firebase.firestore();
const auth = firebase.auth();
// const storage = firebase.storage();
const { Timestamp } = firebase.firestore;

export { db, auth, Timestamp };
