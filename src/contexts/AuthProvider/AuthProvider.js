import React, { createContext, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, updateProfile,signInWithPopup,signOut} from 'firebase/auth';
import { useEffect } from 'react';

const auth = getAuth(app);
export const AuthContext = createContext();



const AuthProvider = ({children}) => {
    const [user, setUser]=useState({});
    const [loading,setLoading] = useState(true);

    const createUser =(email, password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password);
    }
    const updateName = (name)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{displayName:name})

    }

    const signIn =(email,password) =>{
        
        return signInWithEmailAndPassword(auth,email,password);
    }

    const signInWithGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    };
    const logOut=() =>{
        return signOut(auth);
       }

    useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
        // console.log(currentUser)
        setUser(currentUser);
        setLoading(false);
        console.log('auth changed',currentUser)
        
        
    })
    return()=>{
        unsubscribe();
    }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        updateName,
        signInWithGoogle,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;