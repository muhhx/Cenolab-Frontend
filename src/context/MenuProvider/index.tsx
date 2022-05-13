import { useState, createContext } from "react";
import { IChildren, IContext } from "./types";

export const MenuContext = createContext<IContext>({} as IContext)

export const MenuProvider = ({ children }: IChildren) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    
    return (
        <MenuContext.Provider value={{ isOpen, setIsOpen }}>
            { children }
        </MenuContext.Provider>
    )
}