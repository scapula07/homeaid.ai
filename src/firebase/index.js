import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword ,signOut} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDmzcJzoD9vgZMrqI1Ih957gHJg6AZiPKk",
  authDomain: "homeaid-dd63c.firebaseapp.com",
  projectId: "homeaid-dd63c",
  storageBucket: "homeaid-dd63c.appspot.com",
  messagingSenderId: "962028442523",
  appId: "1:962028442523:web:6d6bf6a9f3987294f2873e",
  measurementId: "G-LHDBMPP5J9"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth(app)
export const db=getFirestore()

export const signUp=(email,password)=>{
  return createUserWithEmailAndPassword(auth,email,password)
}
export const logIn=(email,password)=>{
  return signInWithEmailAndPassword(auth,email,password)
}