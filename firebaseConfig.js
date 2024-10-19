import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZqxJV6yi5yNAWmbX0wO3OZW-V8BzLwgQ",
  authDomain: "lili-pizza.firebaseapp.com",
  projectId: "lili-pizza",
  storageBucket: "lili-pizza.appspot.com",
  messagingSenderId: "705807171176",
  appId: "1:705807171176:android:089f58bb5207b384a345dd",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };