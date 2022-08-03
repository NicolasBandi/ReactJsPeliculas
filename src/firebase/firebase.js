// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6PrRYir_bc8k6RGudoJmmZUmWE4diBT4",
  authDomain: "peliculas-1b261.firebaseapp.com",
  projectId: "peliculas-1b261",
  storageBucket: "peliculas-1b261.appspot.com",
  messagingSenderId: "762604739609",
  appId: "1:762604739609:web:2376a025b54bfa5ce2de88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const productsColeection = collection(db,'products')