import { auth } from "./firebaseConfig.js";
import { utils } from "../utils/utils.js";
import { db } from "./firebaseConfig.js";
import { collection, query, where, doc, getDoc, getDocs, updateDoc , addDoc, deleteDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword as createUserWithEmailAndPasswordFirebase, signInWithEmailAndPassword as  signInWithEmailAndPasswordFirebase} from 'firebase/auth';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

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
        console.log("error on sign in with google account", error.message);
    }
}

export const createUserWithEmailAndPassword = async (email, password) => {
    return await createUserWithEmailAndPasswordFirebase(auth, email, password);
};

export const signInWithEmailAndPassword = async (email, password) => {
    return await signInWithEmailAndPasswordFirebase(auth, email, password);
};

export const getAllDataFromCollection = async (collectionName) => {
    let allDataFromCollection = [];
    const querySnapshot = await getDocs(collection(db, collectionName));
    querySnapshot.forEach((doc) => {
      allDataFromCollection.push({ ...doc.data(), id: doc.id })
    });
    return allDataFromCollection
};

export const getDataFromCollection = async (collectionName, dataId) => {
    const docRef = doc(db, collectionName, dataId);
    const docSnap = await getDoc(docRef);
    return { ...docSnap.data(), id: docSnap.id }
};

export const addDocumentToCollection = async (collectionName, dataToCollection) => {
    try {

        dataToCollection.createdAt = Math.floor(new Date() / 1000);
        dataToCollection.updatedAt = Math.floor(new Date() / 1000);
        dataToCollection.isActive = true;
        const collectionRef = collection(db, collectionName);
        const docRef = await addDoc(collectionRef, dataToCollection);
        return docRef.id;
    } catch (error) {
        console.error("Error adding document to collection:", error.message);
        throw error; 
    }
};

export const updateDocumentToCollection = async (collectionName, dataToUpdateId, dataToUpdate) => {
    try {
        docToUpdate.updatedAt = utils.getUnixTimeStamp(new Date());
        const docRefToUpdate = doc(db, collectionName, dataToUpdateId);
        await updateDoc(docRefToUpdate, docToUpdate);
    } catch (error) {
        console.error("Error updating document to collection:", error.message);
        throw error; 
    }
};

export const deleteDocumentFromCollection = async (collectionName, dataToDeleteId) => {
    try {
        const docRefToDelete = doc(db, collectionName, dataToDeleteId);
        await deleteDoc(docRefToDelete);
    } catch (error) {
        console.error("Error deleting document to collection:", error.message);
        throw error; 
    }
};