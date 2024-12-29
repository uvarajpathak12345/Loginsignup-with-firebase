import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from "firebase/auth"; //authentication with email and pp, Additional, google authentication import
import { collection, getFirestore } from "firebase/firestore"; //database of firebase 


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy6pwbHe5Gk_WISr5rKRFB25CwvFZG-aI",
  authDomain: "hackathon-96e1e.firebaseapp.com",
  projectId: "hackathon-96e1e",
  storageBucket: "hackathon-96e1e.appspot.com",
  messagingSenderId: "171388863637",
  appId: "1:171388863637:web:4c915e2035699227a0879c",
  measurementId: "G-59LF2N4F2L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


//initalizing 
const auth = getAuth(app)
const google = new GoogleAuthProvider()
const database = getFirestore(app)
const collections = collection(database ,'users')

export {auth , google , database , collections}




