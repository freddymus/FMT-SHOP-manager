// firebase.js offline 
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";

import {
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,

  collection,
  addDoc,
  getDocs,
  setDoc,
  updateDoc,
  orderBy,
  deleteDoc,
  doc,
  getDoc,
  query,
  where,
  serverTimestamp,
  Timestamp,
  runTransaction,
  writeBatch,
  increment,
  arrayUnion,
  limit

} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCO4Iyz8RHvNnqYKIdKM6XvSOibPtRW7Vk",
    authDomain: "fmt-manager-db.firebaseapp.com",
    projectId: "fmt-manager-db",
    storageBucket: "fmt-manager-db.firebasestorage.app",
    messagingSenderId: "400164268057",
    appId: "1:400164268057:web:da67c2d7023ba4c8cde288",
    measurementId: "G-Q6PT5HKZJ9"
  };

const app = initializeApp(firebaseConfig);

const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager()
  })
});

const enableIndexedDbPersistence = async () => true;

export {
  db,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  setDoc,
  query,
  where,
  serverTimestamp,
  Timestamp,
  runTransaction,
  limit,
  orderBy,
  writeBatch,
  increment,
  arrayUnion,
  enableIndexedDbPersistence
};
