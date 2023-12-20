
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//@Config Firebase
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGE_SENDER,
  appId: import.meta.env.VITE_ID,
  measurementId: import.meta.env.VITE_MESUREMENT
};


//@Initialize Fireebase
export const app = initializeApp(firebaseConfig);

//@Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)
