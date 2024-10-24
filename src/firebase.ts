import { initializeApp } from "firebase/app";
import { getAuth, sendPasswordResetEmail, confirmPasswordReset} from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDJMiieHkMK0vKzR0d2RPjpQhdfinn5X5M",
  authDomain: "nexcelglobal-236a6.firebaseapp.com",
  databaseURL: "https://nexcelglobal-236a6-default-rtdb.firebaseio.com",
  projectId: "nexcelglobal-236a6",
  storageBucket: "nexcelglobal-236a6.appspot.com",
  messagingSenderId: "1041481301268",
  appId: "1:1041481301268:web:61633c4a3df53c49bd9601",
  measurementId: "G-ZR2EKGZJKL"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export const auth = getAuth(app);

export const firestore = getFirestore(app);
 const database = getDatabase(app);
 export {database, storage, db}

 export const passwordReset = async (email: string) => {
  return await sendPasswordResetEmail(auth, email)
}

export const confirmThePasswordReset = async (
  oobCode:string, newPassword:string
) => {
  if(!oobCode && !newPassword){
    return
  }
  
  return await confirmPasswordReset(auth, oobCode, newPassword)
}