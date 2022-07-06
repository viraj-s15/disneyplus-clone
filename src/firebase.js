import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDNMOajce2gLKwf1JOspdo162F626DZD0Q",
  authDomain: "disney-plus-clone-176f0.firebaseapp.com",
  projectId: "disney-plus-clone-176f0",
  storageBucket: "disney-plus-clone-176f0.appspot.com",
  messagingSenderId: "224669318071",
  appId: "1:224669318071:web:16ed6bcf00d08628e68632",
  measurementId: "G-E91KG5L0L7",
}

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider()
const storage = getStorage(firebaseApp)

export { auth, provider, storage }
export default db
