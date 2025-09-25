import { collection, query, where, getDocs, orderBy, limit } from "firebase/firestore"
import { db } from "./firebase-admin"

export const getNewsBySlugFromFirestoreServer = async (slug: string) => {
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
    console.error("Error getting news by slug (server):", error)
    throw error
  }
}

export const getNewsFromFirestoreServer = async () => {
  try {
    const q = query(collection(db, "news"), orderBy("publishedAt", "desc"))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
  } catch (error) {
    console.error("Error getting news (server):", error)
    throw error
  }
}

export const getRelatedNewsFromFirestoreServer = async (currentSlug: string, category: string, limitCount: number = 2) => {
  try {
    // First try to get articles by category only (no orderBy to avoid index requirement)
    const q = query(
      collection(db, "news"), 
      where("category", "==", category)
    )
    const querySnapshot = await getDocs(q)
    
    // Filter out current article, sort by publishedAt, and limit results
    const filteredDocs = querySnapshot.docs
      .filter(doc => doc.data().slug !== currentSlug)
      .sort((a, b) => {
        const aDate = a.data().publishedAt?.toDate?.() || new Date(a.data().publishedAt)
        const bDate = b.data().publishedAt?.toDate?.() || new Date(b.data().publishedAt)
        return bDate.getTime() - aDate.getTime()
      })
      .slice(0, limitCount)
    
    return filteredDocs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
  } catch (error) {
    console.error("Error getting related news (server):", error)
    // Fallback: get any other articles without category filter
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
      console.error("Error getting fallback news (server):", fallbackError)
      return []
    }
  }
}
