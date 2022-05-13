import { createContext, useContext, ReactNode, useState, useEffect } from "react";

interface Props {
    children: ReactNode;
}

interface InitialValue {
    currentPage: string;
    setCurrentPage: (newState: string) => void;
    displayFooter: boolean;
}

const initialValue: InitialValue = {
    currentPage: '/',
    setCurrentPage: () => {},
    displayFooter: true
}

const CurrentPageContext = createContext(initialValue)

export const useCurrentPage = () => {
    return useContext(CurrentPageContext)
}

export const CurrentPageProvider = ({ children }: Props) => {
    const [currentPage, setCurrentPage] = useState<string>(initialValue.currentPage)
    const [displayFooter, setDisplayFooter] = useState<boolean>(initialValue.displayFooter)

    useEffect(() => {
        if(currentPage === "/contato" || currentPage === "/login" || currentPage.includes("/myadmin") || currentPage === "/manutencao") {
            setDisplayFooter(false)
        } else {
            setDisplayFooter(true)
        }
    }, [currentPage])

    return (
        <CurrentPageContext.Provider value={{currentPage, setCurrentPage, displayFooter}}>
            {children}
        </CurrentPageContext.Provider>
    )
}
