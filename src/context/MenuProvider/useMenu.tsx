import { useContext } from "react";
import { MenuContext } from ".";

export const useMenu = () => {
    return useContext(MenuContext)
}