// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9q7bBo_5wx_RFAz7Ot41xoJFmyn5RRW8",
  authDomain: "portfolio-75cc2.firebaseapp.com",
  projectId: "portfolio-75cc2",
  storageBucket: "portfolio-75cc2.appspot.com",
  messagingSenderId: "258485591775",
  appId: "1:258485591775:web:58b2d9a53680d4e7d9136a",
  measurementId: "G-K671LK07ZC"
};

// Initialize Firebase

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);
// Inicializando o serviço de Storage
const storage = getStorage(app);

// Exportando o storage para uso em outros lugares
export { storage };