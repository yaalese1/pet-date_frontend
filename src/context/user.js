import React from "react";
import {useEffect, useState} from "react"

const UserContext = React.createContext();

function UserProvider({children}){
   

    useEffect(() => {
        fetch("/user").then((r) => {
            if (r.ok) {
                r.json().then((userInfo) => {
                    setUser(userInfo)});
                
                
                
         }
            

        });
    }, [])

    const [user, setUser] = useState(null)







    return(
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider};