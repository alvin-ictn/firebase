import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/app'
// const firebaseConfig = {
//   apiKey: "AIzaSyBvC2JgDFRRKQhSBBUKMe9T7VaxZ6GXupU",
//   authDomain: "lms-ga.firebaseapp.com",
//   databaseURL: "https://lms-ga.firebaseio.com",
//   projectId: "lms-ga",
//   storageBucket: "lms-ga.appspot.com",
//   messagingSenderId: "266695725453",
//   appId: "1:266695725453:web:6d010d5eacc5f1a1376dc4",
//   measurementId: "G-GBQJDB0JKM"
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_APIKEY,
  authDomain: process.env.REACT_APP_FB_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FB_DATABASEURL,
  projectId: process.env.REACT_APP_FB_PROJECTID,
  storageBucket: process.env.REACT_APP_FB_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FB_APPID,
  measurementId: process.env.REACT_APP_FB_MEASUREMENTID
}

try {
  firebase.initializeApp(firebaseConfig);
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
} 
firebase.auth();

const fire = firebase;

export default fire;