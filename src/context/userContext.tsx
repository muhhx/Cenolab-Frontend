import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { auth } from "../config/firebase";
import { User } from "firebase/auth";

//Usado para saber se o adm está logado ou não. Caso esteja logado, aparecerá uma tabelinha "myAdmin" em cima do header que redicionará para a página de administrador.
//Caso não esteja logado, não terá acesso ao admin panel

type Props = {
    children: ReactNode;
};

type InitialValue = {
    currentUser: null | User;
};

const initialValue = {
    currentUser: null
};

const UserContext = createContext<InitialValue>(initialValue)

export const useUser = () => {
    return useContext(UserContext)
};

export const UserProvider = ({ children }: Props) => {
    const [currentUser, setCurrentUser] = useState<null | User>(initialValue.currentUser)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        });

        return unsubscribe;
    }, [])

    return (
        <UserContext.Provider value={{currentUser}}>
            {children}
        </UserContext.Provider>
    )
}