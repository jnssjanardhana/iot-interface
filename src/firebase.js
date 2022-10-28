import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbqQvoSVE1k90nP0Fuks0iXXnHYks6VdM",
  authDomain: "iotdemo-6bc38.firebaseapp.com",
  databaseURL: "https://iotdemo-6bc38-default-rtdb.firebaseio.com",
  projectId: "iotdemo-6bc38",
  storageBucket: "iotdemo-6bc38.appspot.com",
  messagingSenderId: "644841156641",
  appId: "1:644841156641:web:2671808f6912f20ca6f360",
  measurementId: "G-RS9Q80F97V"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}