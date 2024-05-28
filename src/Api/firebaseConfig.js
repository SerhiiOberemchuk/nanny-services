import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4nBZ-XIXibrBiYiFcZkqDHX1awz5gLg0",
  authDomain: "best-nannies.firebaseapp.com",
  projectId: "best-nannies",
  storageBucket: "best-nannies.appspot.com",
  messagingSenderId: "161954768105",
  appId: "1:161954768105:web:dc55f82da0acc243dfbc78",
  measurementId: "G-PSG4ZB3QEF",
};

const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const bdFirestore = getFirestore(app);
