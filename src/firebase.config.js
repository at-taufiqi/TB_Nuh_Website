

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyCPJiN5NKcfVvGTtQWPzL80J4xmy0dR7M8",
  authDomain: "tbnuhwebsite.firebaseapp.com",
  projectId: "tbnuhwebsite",
  storageBucket: "tbnuhwebsite.appspot.com",
  messagingSenderId: "825310823739",
  appId: "1:825310823739:web:fc5b0c1658ab972e2ea31e"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app
