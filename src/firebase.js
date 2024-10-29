import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore, doc, deleteDoc, setDoc } from "firebase/firestore";

export const firebaseConfig =  {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_ING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

//Direcciones
const cuentasStreamingUrl = 'cuentasStreaming'
const perfilesCuentasUrl = 'perfiles'

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

//Todo: Funciones Database
const createDatabase = async (direccion, datos) => {
  const collectionRef = collection(db, direccion)
  const docRef = await addDoc(collectionRef, datos)
}

const deleteDatabase = async (direccion, id) => {
  const docRef = doc(db, direccion, id)
  await deleteDoc(docRef)
}

const updateDatabase = async (direccion, id, datos) => {
  const docRef = doc(db, direccion, id)
  await setDoc(docRef, datos)
}

export {
  db,
  cuentasStreamingUrl,
  perfilesCuentasUrl,
  createDatabase,
  deleteDatabase,
  updateDatabase
}