import { google, auth } from "../firebase/Firebaseauth";
import { signInWithPopup } from "firebase/auth";

const googlelogin = async () => {
  try {
    const result = await signInWithPopup(auth, google);
    const user = result.user;
    return user;
  } catch (error) {
    console.log(error);
    throw error; // Re-throw the error to handle it in the calling function
  }
};

export default googlelogin;