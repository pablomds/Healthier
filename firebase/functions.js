import { utils } from "../utils/utils.js";
import { db } from "./firebaseConfig.js";
import { collection, query, where, doc, getDoc, getDocs, updateDoc , addDoc, deleteDoc } from "firebase/firestore";


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

export const getDataFromCollectionWithWhereArray = async (collectionName, field, operator = "==", value) => {
    // Create a query with a where condition
    const q = query(collection(db, collectionName), where(field, operator , value));

    // Get the query snapshot
    const querySnapshot = await getDocs(q);

    // Check if any documents match the condition
    const data = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
    }));

    return data; // Returns an array of matching documents
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