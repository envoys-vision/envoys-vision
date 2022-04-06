// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import { getStorage } from "firebase/storage";
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyADFvoK9D9Tq5beyF-Mk2f2xy_ftoa2yY8",
  authDomain: "envoys-vision-news.firebaseapp.com",
  databaseURL: "https://envoys-vision-news-default-rtdb.firebaseio.com",
  projectId: "envoys-vision-news",
  storageBucket: "envoys-vision-news.appspot.com",
  messagingSenderId: "343686394571",
  appId: "1:343686394571:web:ef9e278441baea9df9214e",
  measurementId: "G-RP2FMDF388"
};


firebase.initializeApp(firebaseConfig);

export const storage = getStorage()
export const auth = firebase.auth()

export default firebase

