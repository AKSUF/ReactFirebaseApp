import React, { useContext, useState } from 'react';
import "../Firebase"
import {getAuth,createUserWithEmailAndPassword,updateProfile} from "firebase/auth"
const AuthContext=React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}


export function AuthProvider({children}){
const[loading,setLoading]=useState(true);
const[currentUser,setCurrentUser]=useState();

async function signup(email,password,username){
const auth=getAuth();
await createUserWithEmailAndPassword(auth,email,password);
//update profile
await updateProfile(auth.currentUser,{
    displayName:username
});

}

    return(
        <AuthContext.Provider vlaue={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}