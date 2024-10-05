import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZqxJV6yi5yNAWmbX0wO3OZW-V8BzLwgQ",
  authDomain: "SEU_AUTH_DOMAIN",
  projectId: "lili-pizza",
  storageBucket: "lili-pizza.appspot.com",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "1:705807171176:android:089f58bb5207b384a345dd",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };