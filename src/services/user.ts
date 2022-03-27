import { auth } from "../config/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export const handleLogin = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
};

export const handleLogout = () => {
    return signOut(auth)
};