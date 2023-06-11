// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {
  getFirestore,
  addDoc,
  collection,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  User,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import DevLog from "@/utils/DevelopmentLog";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

function signUpWithEmail(
  email: string,
  password: string,
  username: string,
  cb: (user: User | null, error: Error | null) => void
) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      // Signed in
      const user = userCredential.user;
      const userPath = `users/${user.uid}`;
      await updateDocument({ username }, userPath);
      cb(user, null);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      DevLog(errorCode, errorMessage);

      cb(null, new Error(errorMessage));
    });
}

function signOutUser() {
  signOut(auth)
    .then(() => {})
    .catch((err) => {});
}

function signInWithEmail(
  email: string,
  password: string,
  cb: (isSuccess: boolean) => void
) {
  signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      cb(true);
    })
    .catch((err) => {
      cb(false);
    });
}

/**
 * @param document - any type of data
 * @param path - The path where the data is stored in firestore
 * @returns Reference ID for the uploaded document
 */
async function createDocument(data: any, path: string) {
  try {
    const ref = collection(db, path);
    const docRef = await addDoc(ref, data);

    return docRef.id;
  } catch (error) {
    DevLog(error);

    return null;
  }
}

async function updateDocument(data: any, path: string) {
  try {
    const ref = doc(db, path);
    await setDoc(ref, data);

    return;
  } catch (error) {
    DevLog(error);
    return null;
  }
}

async function getDocument(path: string) {
  try {
    const ref = doc(db, path);
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  } catch (error) {
    DevLog(error);
  }
}

/**
 * @returns DocumentReference
 * */
function getUserRef(id: string) {
  const ref = doc(db, `/users/${id}`);
  return ref;
}
export {
  auth,
  app,
  signUpWithEmail,
  signInWithEmail,
  signOutUser,
  createDocument,
  getUserRef,
  getDocument,
};
