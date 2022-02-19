import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBLfv1X4V4dRYQVKQYKl_O_hgx7-cG8aCM",
  authDomain: "cenolab-responsive.firebaseapp.com",
  projectId: "cenolab-responsive",
  storageBucket: "cenolab-responsive.appspot.com",
  messagingSenderId: "991699974195",
  appId: "1:991699974195:web:27e3d0a0791fd5c7980b46",
  measurementId: "G-LMEHSZEHZP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);