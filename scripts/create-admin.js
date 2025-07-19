// Script to create an admin user in Firestore
// Run this with: node scripts/create-admin.js

const admin = require('firebase-admin');

// Initialize Firebase Admin (you'll need to add your service account key)
const serviceAccount = {
  // Add your Firebase service account key here
  // You can get this from Firebase Console > Project Settings > Service Accounts
  // Generate new private key and copy the JSON content here
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: 'your-project-id' // Replace with your actual project ID
});

const db = admin.firestore();

async function createAdminUser() {
  try {
    // Create admin user in Firestore
    const adminUserData = {
      email: 'admin@hssplaw.com',
      displayName: 'HSS Law Admin',
      role: 'admin',
      createdAt: admin.firestore.Timestamp.now(),
      lastLogin: admin.firestore.Timestamp.now()
    };

    // Use a specific UID or let Firestore generate one
    await db.collection('users').doc('admin-user-id').set(adminUserData);
    
    console.log('Admin user created successfully!');
    console.log('Email: admin@hssplaw.com');
    console.log('Role: admin');
    console.log('');
    console.log('You can now:');
    console.log('1. Create this user in Firebase Authentication with email/password');
    console.log('2. Or modify the script to use the actual UID from Authentication');
    
  } catch (error) {
    console.error('Error creating admin user:', error);
  }
}

createAdminUser();
