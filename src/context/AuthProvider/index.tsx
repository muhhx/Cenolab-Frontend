import { createContext, useState, useEffect } from "react";
import { IAuthChildren, IContext } from "./types";
import { LoginRequest } from "./utils";
import { setTokenLocalStorage, getTokenLocalStorage } from "./utils";

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({ children }: IAuthChildren ) => {
    const [isAuth, setIsAuth] = useState<boolean>(false)

    useEffect(() => {
        const token = getTokenLocalStorage()
        
        if(!token) {
            return setIsAuth(false)
        }
        
        setIsAuth(true)
    }, [])

    async function authenticate(email: string, password: string) {
        const response = await LoginRequest(email, password)

        if(response) {
            setIsAuth(true)
            setTokenLocalStorage(response.token)
        }
    }

    function logout() {
        setIsAuth(false)
        setTokenLocalStorage('')
    }

    return (
        <AuthContext.Provider value={{ isAuth, authenticate, logout }}>
            { children }
        </AuthContext.Provider>
    )
}