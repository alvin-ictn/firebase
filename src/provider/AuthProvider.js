import React, {useState} from 'react';
import {authMethods} from '../config/auth'
export const firebaseAuth = React.createContext()

const AuthProvider = (props) => {
  const [inputs, setInputs] = useState({email: '', password: ''})
  const [errors, setErrors] = useState([])
  const [token, setToken] = useState(null)

  const handleSignup = () => {
    // middle man between firebase and signup 
    console.log('handleSignup')
    console.log(inputs)
    
    // calling signup from firebase server
    return authMethods.signup()

  }

  return (
    <firebaseAuth.Provider value={{handleSignup,
      inputs,
      setInputs,}}>
      {props.children}
    </firebaseAuth.Provider>
  );
};

export default AuthProvider;
