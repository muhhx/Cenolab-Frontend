import { useState } from "react";
import { data } from "./data";
import * as C from "./styles";

const Form: React.FC = () => {
    const [status, setStatus] = useState<null | string>(null)

    return (
        <C.Form>
            {status ? <C.Status>{status}</C.Status> : ''}
            <C.Input type="text" placeholder="Nome"/>
            <C.Input type="text" placeholder="Nome do projeto"/>
            <C.Input type="email" placeholder="Email"/>
            <C.Input type="text" placeholder="Telefone para contato"/>
            <C.Input type="text" placeholder="Conte mais sobre o seu projeto ou ideia..."/>
            <C.Button buttonBackground={data.buttonBackground}>{data.buttonText}</C.Button>
        </C.Form>
    )
}

export default Form;