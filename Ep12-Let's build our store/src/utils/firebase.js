// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3Cm_y-R0-9VdKzRAWFRjOOneDZs-zIY0",
    authDomain: "instafood-f4f78.firebaseapp.com",
    projectId: "instafood-f4f78",
    storageBucket: "instafood-f4f78.appspot.com",
    messagingSenderId: "123522142408",
    appId: "1:123522142408:web:42b483399874dfae8855fd"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;
