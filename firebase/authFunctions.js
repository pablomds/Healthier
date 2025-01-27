import { createUserWithEmailAndPassword as createUserWithEmailAndPasswordFirebase, signInWithEmailAndPassword as  signInWithEmailAndPasswordFirebase, fetchSignInMethodsForEmail  } from 'firebase/auth';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { auth } from "./firebaseConfig.js";

const provider = new GoogleAuthProvider();

export const isUserSignedUp = async (email) => {
    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      if (signInMethods.length > 0) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error checking user existence:', error);
      return false;
    }
};

export const signInWithPopupGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        if (result) {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            return user
        }

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log("Error on sign in with google account", error.message);
    }
}

export const createUserWithEmailAndPassword = async (email, password) => {
    try {
        return await createUserWithEmailAndPasswordFirebase(auth, email, password);
    } catch (error) {
        console.log("Error occured on create user with email and password", error)
    }
    
};

export const signInWithEmailAndPassword = async (email, password) => {
    try {
        return await signInWithEmailAndPasswordFirebase(auth, email, password);
    } catch (error) {
        console.log("An Error Occured with Sign In with Email and Password", error)
    }
    
};

