import React from 'react';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../hooks/useFirebase';

const Login = () => {
    const [user, setUser] = useState({});
    const {signInUsingGoogle} = useFirebase();
    const [error, setError] = useState('');
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then((result) => {
            console.log(result.user)
            history.push(redirect_uri);
            setUser(result.user)
        })
        .catch((error) => {
            console.log(error.message);
            setError(error.message)
        });
    }
    return (
        <div className='container w-25 border mx-auto p-4 text-center mt-5 '>
            <h2>Please Login</h2>
            <button onClick={handleGoogleLogin} className='btn btn-primary mt-3'>Google Sign In</button>
        </div>
    );
};

export default Login;