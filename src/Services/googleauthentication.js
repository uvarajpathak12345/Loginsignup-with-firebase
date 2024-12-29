import { google,auth } from "../firebase/Firebaseauth";
import { signInWithPopup } from "firebase/auth";

const googlelogin = async () => {

    try{
        let response = await signInWithPopup(auth, google)
        const credential = google.credentialFromResult(response);
        const token = credential.accessToken;
        const user = response.user;
       console.log(user,response.uid, response.displayName, response.email, response.photoURL)  
        const additionalUserInfo = response.additionalUserInfo(response);
    }catch(err){
        console.log(err)
    }

}
export default googlelogin;


