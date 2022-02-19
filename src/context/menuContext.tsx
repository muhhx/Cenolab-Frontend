import { createContext, ReactNode, useContext, useState } from "react";

interface Props {
    children: ReactNode;
}

interface Initial {
    isOpen: boolean;
    setIsOpen: (newState: boolean) => void;
}

const initialValues: Initial = {
    isOpen: false,
    setIsOpen: () => {}
}

const MenuContext = createContext(initialValues)

export const useMenu = () => {
    return useContext(MenuContext)
}

export const MenuProvider = ({ children }: Props ) => {
    const [isOpen, setIsOpen] = useState<boolean>(initialValues.isOpen)

    return (
        <MenuContext.Provider value={{isOpen, setIsOpen}}>
            {children}
        </MenuContext.Provider>
    )
}