import { setDoc, doc, getDoc } from "firebase/firestore";
import { collections } from "../firebase/Firebaseauth";

export async function getById(id){
    let response = await getDoc(doc(collections,id.user_id))
    return response

      
}

export async function create(data){
    let response = await setDoc(doc(collections,data.user_id),{
        firstname:data.firstname,
        lastname:data.lastname,
        email:data.email,
    })
    return response
}