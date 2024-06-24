// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"; // Import getStorage

// Konfigurasi Firebase Anda
const firebaseConfig = {
    apiKey: "AIzaSyCazR_EprzAfjlL3T71dNyH4OojPUmyqS8",
    authDomain: "pawpals-304d3.firebaseapp.com",
    databaseURL: "https://pawpals-304d3-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "pawpals-304d3",
    storageBucket: "pawpals-304d3.appspot.com",
    messagingSenderId: "51752454189",
    appId: "1:51752454189:web:5ca7f968bf3b902f6ed0a4",
    measurementId: "G-0B0C3RDLL9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);
const storage = getStorage(app); // Initialize storage

export { app, database, auth, storage }; // Export storage
