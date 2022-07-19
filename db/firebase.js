import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBgZO4sDQVlCIVyldN3vDjGganAInFdi2w",
    authDomain: "simple-blog-7cd06.firebaseapp.com",
    databaseURL: "https://simple-blog-7cd06-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "simple-blog-7cd06",
    storageBucket: "simple-blog-7cd06.appspot.com",
    messagingSenderId: "304034080428",
    appId: "1:304034080428:web:050cd191cb0512fc32e109"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
