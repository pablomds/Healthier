import { COLLECTIONS } from "../firebase/collections.js"
import { addDocumentToCollection, getAllDataFromCollection, getDataFromCollection, getDataFromCollectionWithWhereArray} from "../firebase/functions"

export const createUser = async (userData) => {
    try {
        await addDocumentToCollection(COLLECTIONS.USERS, userData);
    } catch (error) {
        console.log("Error while adding user: ",error.message)
    }
};

export const getUserWithEmail = async (email) => {
    try {
        const user = await getDataFromCollectionWithWhereArray(COLLECTIONS.USERS, "email", "==" , email);
        return user
    } catch (error) {
        console.log('Error while fetching user with email:', error)
    }
}