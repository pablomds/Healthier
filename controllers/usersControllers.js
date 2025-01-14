import { COLLECTIONS } from "../firebase/collections.js"
import { collection, query, where } from "firebase/firestore";
import { doc, getDoc, getDocs, updateDoc , addDoc, deleteDoc } from "firebase/firestore";
import { addDocumentToCollection, getAllDataFromCollection, getDataFromCollection } from "../firebase/functions";

export const createUser = async (userData) => {
    try {
        await addDocumentToCollection(COLLECTIONS.USERS, userData);
    } catch (error) {
        console.log("Error while adding user: ",error.message)
    }
};