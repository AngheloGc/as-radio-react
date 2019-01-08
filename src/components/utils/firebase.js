// Importing Firebase
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyAjKp_f5F1Tp22oJGQscVHQ6YYgXQH02VE",
  authDomain: "anime-sama-radio.firebaseapp.com",
  databaseURL: "https://anime-sama-radio.firebaseio.com",
  projectId: "anime-sama-radio",
  storageBucket: "anime-sama-radio.appspot.com",
  messagingSenderId: "709190102912"
}

firebase.initializeApp(config);

export default firebase