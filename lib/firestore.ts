import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  where, 
  doc, 
  updateDoc, 
  deleteDoc,
  getDoc,
  setDoc,
  limit
} from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage"
import { db, storage } from "./firebase"

// News/Articles functions
export const saveNewsToFirestore = async (article: any) => {
  try {
    const docRef = await addDoc(collection(db, "news"), {
      ...article,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
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

export const getNewsBySlugFromFirestore = async (slug: string) => {
  try {
    const q = query(collection(db, "news"), where("slug", "==", slug))
    const querySnapshot = await getDocs(q)
    
    if (querySnapshot.empty) {
      return null
    }
    
    const doc = querySnapshot.docs[0]
    return {
      id: doc.id,
      ...doc.data(),
    }
  } catch (error) {
    console.error("Error getting news by slug:", error)
    throw error
  }
}

export const getRelatedNewsFromFirestore = async (currentSlug: string, category: string, limitCount: number = 2) => {
  try {
    // Simplified query to avoid composite index requirement
    // First get all articles by category
    const q = query(
      collection(db, "news"), 
      where("category", "==", category),
      orderBy("publishedAt", "desc")
    )
    const querySnapshot = await getDocs(q)
    
    // Filter out current article and limit results
    const filteredDocs = querySnapshot.docs
      .filter(doc => doc.data().slug !== currentSlug)
      .slice(0, limitCount)
    
    return filteredDocs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
  } catch (error) {
    console.error("Error getting related news:", error)
    // Fallback: get any other articles
    try {
      const fallbackQ = query(
        collection(db, "news"),
        orderBy("publishedAt", "desc"),
        limit(limitCount + 1)
      )
      const fallbackSnapshot = await getDocs(fallbackQ)
      return fallbackSnapshot.docs
        .filter(doc => doc.data().slug !== currentSlug)
        .slice(0, limitCount)
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
    } catch (fallbackError) {
      console.error("Error getting fallback news:", fallbackError)
      return []
    }
  }
}

export const updateNewsInFirestore = async (id: string, updates: any) => {
  try {
    const docRef = doc(db, "news", id)
    await updateDoc(docRef, {
      ...updates,
      updatedAt: new Date().toISOString(),
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
    // Validasi ukuran file (2MB = 2 * 1024 * 1024 bytes)
    const maxSize = 2 * 1024 * 1024 // 2MB
    if (file.size > maxSize) {
      throw new Error(`File terlalu besar. Maksimal 2MB. Ukuran file: ${(file.size / (1024 * 1024)).toFixed(2)}MB`)
    }

    // Validasi tipe file
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
    if (!allowedTypes.includes(file.type)) {
      throw new Error('Tipe file tidak diizinkan. Gunakan JPEG, PNG, atau WebP')
    }

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

// User management functions
export const saveUserToFirestore = async (user: any, role: string = "user") => {
  try {
    const userRef = doc(db, "users", user.uid)
    await setDoc(userRef, {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || user.email?.split("@")[0] || "User",
      photoURL: user.photoURL || null,
      role: role,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
    }, { merge: true }) // merge: true untuk update existing data
    
    return userRef.id
  } catch (error) {
    console.error("Error saving user:", error)
    throw error
  }
}

export const getUserFromFirestore = async (uid: string) => {
  try {
    const userRef = doc(db, "users", uid)
    const userSnap = await getDoc(userRef)
    
    if (userSnap.exists()) {
      return { id: userSnap.id, ...userSnap.data() }
    } else {
      return null
    }
  } catch (error) {
    console.error("Error getting user:", error)
    throw error
  }
}

export const updateUserLastLogin = async (uid: string) => {
  try {
    const userRef = doc(db, "users", uid)
    await updateDoc(userRef, {
      lastLogin: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Error updating last login:", error)
    throw error
  }
}
