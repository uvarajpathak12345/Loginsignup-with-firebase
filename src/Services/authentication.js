import React from 'react';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/Firebaseauth";
import { create, getById } from "../Services/userServices"; //it is for putting data in database using authentication id

export  async function  login({email,password}) {
    try{
      let response = await signInWithEmailAndPassword(auth,email,password);
      const userid = response.user.uid;

      const userSnap = getById({user_id:userid})

      if ((await userSnap).exists()){  //exists is firebase db function where it checks the data is getting or not from the database 
        const user= {...(await userSnap).data(), userid} // it is stroing the data from the data base 
        return user

      }else{
        throw new Error('user not found')
      }

    }
    catch(err){
        console.log(err)

    }finally{
        console.log('done')
    }
}


export async function SignIn({email,password,firstname,lastname}){
    try{
        let response = await createUserWithEmailAndPassword(auth,email,password);
        const userid = response.user.uid;


    const user =  await create({
        user_id:userid,
        firstname,
        lastname,
        email,
    })
     return user;
     
    }catch(err){
        console.log(err)
    }
    
}
