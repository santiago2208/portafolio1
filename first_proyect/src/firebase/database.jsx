
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAf3YqESV1yqEiMPCTytIvyOZPwfK_18tc",
  authDomain: "portafolio1-506f0.firebaseapp.com",
  projectId: "portafolio1-506f0",
  storageBucket: "portafolio1-506f0.appspot.com",
  messagingSenderId: "376628821974",
  appId: "1:376628821974:web:d4ac1a1cfca93b1d852e77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);