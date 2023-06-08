// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  User,
  signOut,
  signInWithEmailAndPassword,
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

function signUpWithEmail(
  email: string,
  password: string,
  cb: (user: User | null, error: Error | null) => void
) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

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

export { auth, app, signUpWithEmail, signInWithEmail, signOutUser };
