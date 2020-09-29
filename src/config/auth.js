import fire from './firebase'
import firebase from 'firebase/app'

export const authMethods = {

  signup: (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email,password) 
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.error(err)
      })
    },
  signin: (email, password) => {

    },
  signout: (email, password) => {

    },
  
}

