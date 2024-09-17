import { initializeApp } from "firebase/app";
import { getAuth, sendPasswordResetEmail, confirmPasswordReset} from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBnqEKEqo4D7xmqSP0fpfBxUo5IOUuQ5s8",
    authDomain: "panglobal-5c601.firebaseapp.com",
    projectId: "panglobal-5c601",
    storageBucket: "panglobal-5c601.appspot.com",
    messagingSenderId: "321734780345",
    appId: "1:321734780345:web:09ac13974e7f50bd300268",
    measurementId: "G-ZC4PNC5HY9"
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