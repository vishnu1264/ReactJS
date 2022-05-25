import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListener, createUserDocumentFromAuth, signOutUser } from "../utils/firebase/firebase.utils";

//as the actual value you want to access
export const UserContext = createContext({ 
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const[currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };
    // console.log('calling signout')
    // signOutUser();
    // console.log('after signout')

    useEffect(()=>{
        const unsubscribe = onAuthStateChangedListener( (user)=>{
            // console.log(user);
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
        return unsubscribe;
    },[])

    return <UserContext.Provider value={value}> {children} </UserContext.Provider>
}
