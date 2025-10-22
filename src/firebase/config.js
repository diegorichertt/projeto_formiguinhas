// Firebase Configuration for React
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Firebase configuration object
// IMPORTANT: Replace these placeholder values with your actual Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDgpdkoi5m3mjQTEvbkNYEVfJ9GV8TKsf0", // Get from Firebase Console > Project Settings > General
    authDomain: "formiguinhas090507.firebaseapp.com",
    projectId: "formiguinhas090507",
    storageBucket: "formiguinhas090507.appspot.com",
    messagingSenderId: "113516121522543069771",
    appId: "1:920133769659:web:1175c28a5d7356fa480c9e" // Get from Firebase Console > Project Settings > General
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Export the app instance
export default app;
