import { db } from "../config/firebase";
import { doc, updateDoc, getDocs, collection } from "firebase/firestore";

export const handleManutencao = (newState: boolean) => {
    const docRef = doc(db, "config", "hxWDhIBbXZbOiVVtl39A");
    return updateDoc(docRef, {
        isClosed: newState
    })
};

export const getManutencao = () => {
    const colRef = collection(db, "config")
    return getDocs(colRef)
};