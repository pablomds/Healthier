import _ from "lodash"
import { collection, query, where } from "firebase/firestore"
import { doc, getDoc, getDocs, updateDoc , addDoc, deleteDoc } from "firebase/firestore"
import { db, storage } from "./dbConfig"
import { COLLECTION } from "./collection"
import { getStorage, ref, listAll, uploadBytesResumable, getDownloadURL, deleteObject  } from "firebase/storage"
import { utils } from "@/Utils/utils"

export const getDataFromCollection = async (collectionName, dataId) => {
    const docRef = doc(db, collectionName, dataId);
    const docSnap = await getDoc(docRef);
    return { ...docSnap.data(), id: docSnap.id }
};

export const getAllDataFromCollectionCreatedByUser = async (collectionName, userId) => {
    let arrayData;
    const q = query(collection(db,collectionName), where('created_by', '==', userId));
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach(doc => arrayData.push({...doc.data(), id: doc.id}))

    if (arrayData.length === 1) {
        return arrayData[0];
    }
    
    return arrayData
};

export const getAllDataFromCollectionWithIds = async (collectionName, listOfIds) => {

    let listOfData;

    await Promise.all([
        listOfIds.forEach(async (id) => {
            const data = await getDataFromCollection(collectionName, id)
            listOfData.push(data)
        })]
    )

    return listOfData
};

export const getAllDataFromCollectionWithWhereArray = async (collectionName, whereArray) => {

    let arrayData;
    const q = query(collection(db,collectionName), where(whereArray.property, '==', whereArray.propertyValue))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
        arrayData.push({...doc.data(), id: doc.id})
    })
    
    if (arrayData.length === 1) {
        return arrayData[0];
    }

    return arrayData
};

export const getOneDataFromCollectionWithWhereArray = async (collectionName, whereArray, fiel) => {

    let arrayData;
    const q = query(collection(db,collectionName), where(whereArray.property, '==', whereArray.propertyValue))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data[field] !== undefined) { // Vérifier si le champ existe
            arrayData.push(data[field]); // Ajouter la valeur du champ spécifique
        }
    });
    
    if (arrayData.length === 1) {
        return arrayData[0];
    }

    return arrayData
};

export const getAllDataFromCollectionWithWhereArrayContains = async (collectionName, whereArray) => {

    let arrayData;
    const q = query(collection(db,collectionName), where(whereArray.property, 'array-contains', whereArray.propertyValue));
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
        arrayData.push({...doc.data(), id: doc.id})
    })
    // if (arrayData.length === 1) {
    //     return arrayData[0];
    // }
    return arrayData
};

export const getAllDataFromCollection = async (collectionName) => {
    let allDataFromCollection;
    const querySnapshot = await getDocs(collection(db, collectionName));
    
    querySnapshot.forEach((doc) => {
      allDataFromCollection.push({ ...doc.data(), id: doc.id })
    });

    return _.filter(allDataFromCollection, 'is_active')
};

export const getAllDataFromCollectionEvenDisable = async (collectionName) => {
    let allDataFromCollection;
    const querySnapshot = await getDocs(collection(db, collectionName))
    
    querySnapshot.forEach((doc) => {
      allDataFromCollection.push({ ...doc.data(), id: doc.id })
    });

    return allDataFromCollection
};

export const addDocumentToCollection = async (collectionName, dataToCollection) => {
    dataToCollection.creation_date = utils.getUnixTimeStamp(new Date());
    dataToCollection.updated_date = utils.getUnixTimeStamp(new Date());
    dataToCollection.is_active = true;
    const addedDocumentToCollection = collection(db, collectionName);    
    const newDocRef = await addDoc(addedDocumentToCollection, dataToCollection);
    return newDocRef.id
    
};

export const updateDocumentToCollection = async (collectionName, dataToUpdateId, dataToUpdate) => {

    let docToUpdate = _.omitBy(dataToUpdate, _.overSome([_.isNil, _.isNaN]));
    docToUpdate.updated_date = utils.getUnixTimeStamp(new Date());
    const docRefToUpdate = doc(db, collectionName, dataToUpdateId);
    await updateDoc(docRefToUpdate, docToUpdate);

};

export const deleteDocumentFromCollection = async (collectionName, dataToDeleteId) => {
    const docRefToDelete = doc(db, collectionName, dataToDeleteId)
    await deleteDoc(docRefToDelete)

};

export const deleteElementFromArrayInDocument = async (collectionName, documentId, field, elementId) => {
    try {
        // Récupérer le document
        const docRef = doc(db, collectionName, documentId);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            // Obtenir le tableau du champ spécifié
            const fieldArray = docSnap.data()[field];
            if (Array.isArray(fieldArray)) {
                // Supprimer l'élément avec l'ID spécifié
                const updatedArray = fieldArray.filter((element) => element.id !== elementId);
                
                // Mettre à jour le document avec le nouveau tableau
                await updateDoc(docRef, { [field]: updatedArray });
                
                return { success: true };
            } else {
                return { success: false, error: "Le champ spécifié n'est pas un tableau." };
            }
        } else {
            return { success: false, error: "Le document spécifié n'existe pas." };
        }
    } catch (error) {
        console.error("Erreur lors de la suppression de l'élément du tableau :", error);
        return { success: false, error: "Une erreur s'est produite lors de la suppression de l'élément du tableau." };
    }
};

export const listFiles = async (foldername) => {
    // Get a reference to the storage service, which is used to create references in your storage bucket
    const storageRef = getStorage();
    // Create a storage reference from our storage service
    const listRef = ref(storageRef, foldername);

    let imagesUrl = []

    const listAllFilesFromFolder = await listAll(listRef)

    await Promise.all(listAllFilesFromFolder.items.map(async (itemRef) => {
        let imageUrl = await getDownloadURL(itemRef)
        imagesUrl.push(imageUrl)
    }))
    return imagesUrl;
};

export const uploadFileToStorage = async (file, folderName) => {
    const storageRef = ref(storage, `/${folderName}/${file.name}`)
    await uploadBytesResumable(storageRef, file)
    return await getDownloadURL(storageRef)
};

export const deleteFileFromStorage = async (folderName, fileName) => {
    const storageRef = ref(storage, `/${folderName}/${fileName}`)
    return await deleteObject(storageRef)
};