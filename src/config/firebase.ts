import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // @ts-ignore
  apiKey: import.meta.env.VITE_API_KEY,
  // @ts-ignore
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  // @ts-ignore
  projectId: import.meta.env.VITE_PROJECT_ID,
  // @ts-ignore
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  // @ts-ignore
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  // @ts-ignore
  appId: import.meta.env.VITE_APP_ID,
  // @ts-ignore
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
