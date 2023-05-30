import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDfsquxvy-maPTdWC0fpMnhBmBFvBlZ_EU",
  authDomain: "react-portfolio-sandeep.firebaseapp.com",
  projectId: "react-portfolio-sandeep",
  storageBucket: "react-portfolio-sandeep.appspot.com",
  messagingSenderId: "13601217858",
  appId: "1:13601217858:web:9f5677941222faa7ba7cdb"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();