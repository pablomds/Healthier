import { auth, db } from "./dbConfig";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

import { COLLECTION } from "./collection.js";

import { authCodeErrorToMessage } from "./firebaseErrorHandler";
import { Users } from "@/Models/Users";

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, COLLECTION.USERS), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db,COLLECTION.USERS), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err)
    authCodeErrorToMessage(err)
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    return authCodeErrorToMessage(err)
  }
};

const registerWithEmailAndPassword = async (user) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, user.email, user.password);
    const uid = res.user.uid;
    const newUser = { ...user.toDb(), uid: uid, auth_provider: "local"}
    await addDoc(collection(db, COLLECTION.USERS), newUser);
    
    return newUser.uid
  } catch (err) {
    console.error('Erreur authtication : ',err);
    authCodeErrorToMessage(err)
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    authCodeErrorToMessage(err)
  }
};

const isLoggedIn = async () => {
    try {
      await new Promise((resolve, reject) =>
        auth.onAuthStateChanged(
          user => {
            if (user) {
              
              // User is signed in.
              resolve(user)
            } else {
              // No user is signed in.
              reject('no user logged in')
            }
          },
          // Prevent console error
          error => reject(error)
        )
      )
      return true
    } catch (error) {
      return false
    }
};
  


const logout = () => signOut(auth);


export {
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  isLoggedIn
};