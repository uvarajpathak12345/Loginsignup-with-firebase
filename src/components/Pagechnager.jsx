import React from "react";
import { useContext } from "react";
import { UserContext } from "../Services/UserContext";
import Form from "./Sign_in";
import Login from "./Login";

const Pagechanger = () => {
    const { user, setUser } = useContext(UserContext);
    console.log(user.pagechange)
    return  (
        <>
           {user.pagechange ? <Form /> : <Login />}
        </>
    )

}

export default Pagechanger