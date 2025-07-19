import { doc, setDoc, getDoc } from "firebase/firestore"
import { db } from "./firebase"

// Function to create a test admin user (for development only)
export async function createTestAdminUser() {
  try {
    const adminEmail = "admin@hssplaw.com"
    const adminData = {
      email: adminEmail,
      displayName: "HSS Law Admin",
      role: "admin",
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString()
    }

    // Create a document with a specific ID for the admin
    await setDoc(doc(db, "users", "test-admin"), adminData)
    console.log("Test admin user created successfully!")
    return adminData
  } catch (error) {
    console.error("Error creating test admin user:", error)
    throw error
  }
}

// Function to manually create an admin user by UID
export async function makeUserAdmin(uid: string, userData: any) {
  try {
    const updatedData = {
      ...userData,
      role: "admin",
      lastLogin: new Date().toISOString()
    }
    
    await setDoc(doc(db, "users", uid), updatedData)
    console.log(`User ${uid} is now an admin`)
    return updatedData
  } catch (error) {
    console.error("Error making user admin:", error)
    throw error
  }
}
