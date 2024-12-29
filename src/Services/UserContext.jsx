import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        isLogin: false,
        pagechange: true,
    });
    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}



export {UserProvider,UserContext} //useUser is export to read and modify the user data which is defined in the useState hook
