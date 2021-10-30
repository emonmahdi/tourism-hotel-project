import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,signOut  } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import intializeAuthentication from "../Firebase/firebase.init";

intializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true)
     
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const signInUsingGoogle = () => {
        setIsLoading(true)
      return  signInWithPopup(auth, googleProvider)
      .finally( () => setIsLoading(false)) 
       
            
 
    }
    useEffect( () => {
       const unsubscribed = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user);
                console.log('inside user', user)
            }else{
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then( () => { })
            .finally(() => setIsLoading(false)); 
    }

    return{
        user,
        error,
        isLoading,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;