import { createContext, useContext, ReactNode, useState } from "react";

interface Props {
    children: ReactNode;
}

interface InitialValue {
    currentPage: string;
    setCurrentPage: (newState: string) => void
}

const initialValue: InitialValue = {
    currentPage: '/',
    setCurrentPage: () => {}
}

const CurrentPageContext = createContext(initialValue)

export const useCurrentPage = () => {
    return useContext(CurrentPageContext)
}

export const CurrentPageProvider = ({ children }: Props) => {
    const [currentPage, setCurrentPage] = useState<string>(initialValue.currentPage)

    return (
        <CurrentPageContext.Provider value={{currentPage, setCurrentPage}}>
            {children}
        </CurrentPageContext.Provider>
    )
}