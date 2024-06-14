import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCiwN3xXstw9Md0alym9hQcDWDQNwRVNIM",
    authDomain: "netflix-rebuild-9b63e.firebaseapp.com",
    projectId: "netflix-rebuild-9b63e",
    storageBucket: "netflix-rebuild-9b63e.appspot.com",
    messagingSenderId: "395764674131",
    appId: "1:395764674131:web:150b1b9b3a970d8954e0a6"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;