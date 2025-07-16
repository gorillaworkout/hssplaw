import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, orderBy } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage"
import { db, storage } from "./firebase"

// News/Articles functions
export const saveNewsToFirestore = async (article: any) => {
  try {
    const docRef = await addDoc(collection(db, "news"), {
      ...article,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    return docRef.id
  } catch (error) {
    console.error("Error saving news:", error)
    throw error
  }
}

export const getNewsFromFirestore = async () => {
  try {
    const q = query(collection(db, "news"), orderBy("publishedAt", "desc"))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
  } catch (error) {
    console.error("Error getting news:", error)
    throw error
  }
}

export const updateNewsInFirestore = async (id: string, updates: any) => {
  try {
    const docRef = doc(db, "news", id)
    await updateDoc(docRef, {
      ...updates,
      updatedAt: new Date(),
    })
  } catch (error) {
    console.error("Error updating news:", error)
    throw error
  }
}

export const deleteNewsFromFirestore = async (id: string) => {
  try {
    await deleteDoc(doc(db, "news", id))
  } catch (error) {
    console.error("Error deleting news:", error)
    throw error
  }
}

// Image upload functions
export const uploadImageToStorage = async (file: File, path: string) => {
  try {
    const storageRef = ref(storage, path)
    const snapshot = await uploadBytes(storageRef, file)
    const downloadURL = await getDownloadURL(snapshot.ref)
    return downloadURL
  } catch (error) {
    console.error("Error uploading image:", error)
    throw error
  }
}

export const deleteImageFromStorage = async (path: string) => {
  try {
    const storageRef = ref(storage, path)
    await deleteObject(storageRef)
  } catch (error) {
    console.error("Error deleting image:", error)
    throw error
  }
}

// Contact form functions
export const saveContactToFirestore = async (contact: any) => {
  try {
    const docRef = await addDoc(collection(db, "contacts"), {
      ...contact,
      createdAt: new Date(),
      status: "new",
    })
    return docRef.id
  } catch (error) {
    console.error("Error saving contact:", error)
    throw error
  }
}

export const getContactsFromFirestore = async () => {
  try {
    const q = query(collection(db, "contacts"), orderBy("createdAt", "desc"))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
  } catch (error) {
    console.error("Error getting contacts:", error)
    throw error
  }
}
