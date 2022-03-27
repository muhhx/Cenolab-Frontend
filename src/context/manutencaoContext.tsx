//Retorna true or false. Se true, quando você tentar acessar qualquer página, vai ser redirecionado pra Página de Manutenção

import { createContext, ReactNode, useState, useContext, useEffect } from "react";
import { getManutencao } from "../services/manutencao";

type Props = {
    children: ReactNode;
}

type InitialValue = {
    isClosed: boolean;
}

const initialValue = {
    isClosed: false
}

const ManutencaoContext = createContext<InitialValue>(initialValue)

export const useManutencao = () => {
    return useContext(ManutencaoContext)
}

export const ManutencaoProvider = ({ children }: Props) => {
    const [isClosed, setIsClosed] = useState<boolean>(initialValue.isClosed)

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await getManutencao()
                const data = response.docs.map((doc) => (doc.data()))[0]
                setIsClosed(data.isClosed)
            } catch(error) {
                console.log(error)
            }
        }
        getData()
    }, [])

    return (
        <ManutencaoContext.Provider value={{isClosed}}>
            {children}
        </ManutencaoContext.Provider>
    )
}