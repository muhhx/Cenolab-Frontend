import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBLfv1X4V4dRYQVKQYKl_O_hgx7-cG8aCM",
  authDomain: "cenolab-responsive.firebaseapp.com",
  projectId: "cenolab-responsive",
  storageBucket: "cenolab-responsive.appspot.com",
  messagingSenderId: "991699974195",
  appId: "1:991699974195:web:27e3d0a0791fd5c7980b46",
  measurementId: "G-LMEHSZEHZP"
};

// SUBSTITUIR PARA PRODUCTION:
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
//   measurementId: import.meta.env.VITE_MEASUREMENT_ID
// };

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);