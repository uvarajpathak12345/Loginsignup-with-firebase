import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from "firebase/auth"; //authentication with email and pp, Additional, google authentication import
import { collection, getFirestore } from "firebase/firestore"; //database of firebase 


// Firebase configuration


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


//initalizing 
const auth = getAuth(app)
const google = new GoogleAuthProvider()
const database = getFirestore(app)
const collections = collection(database ,'users')

export {auth , google , database , collections}




