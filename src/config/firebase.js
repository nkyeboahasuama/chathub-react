import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdmm9dCs-0DRJMOHtSqCLBtQLAnqYkWVw",
  authDomain: "chathub-dev-e5792.firebaseapp.com",
  projectId: "chathub-dev-e5792",
  storageBucket: "chathub-dev-e5792.appspot.com",
  messagingSenderId: "310047296729",
  appId: "1:310047296729:web:2e4ca341c5069e56bf02c8",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
