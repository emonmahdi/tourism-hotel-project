import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,signOut  } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import intializeAuthentication from "../Firebase/firebase.init";

intializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    
     
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const signInUsingGoogle = () => {
      return  signInWithPopup(auth, googleProvider)
            
 
    }
    useEffect( () => {
       const unsubscribed = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user);
                console.log('inside user', user)
            }else{
                setUser({})
            }
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        signOut(auth)
            .then( () => { });
    }

    return{
        user,
        error,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;