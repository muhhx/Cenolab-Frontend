import { useState } from "react";
import { sendEmailRequest } from "../../utils/ApiRequests";
import { data } from "./data";

import * as C from "./styles";

const Form: React.FC = () => {
    const [status, setStatus] = useState<null | string>(null)

    const [name, setName] = useState<string>("")
    const [projectName, setProjectName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [telephone, setTelephone] = useState<string>("")
    const [description, setDescription] = useState<string>("")

    function resetInputs() {
        setName("")
        setProjectName("")
        setEmail("")
        setTelephone("")
        setDescription("")
    }    

    async function sendEmail(e: React.MouseEvent) {
        e.preventDefault();
        
        setStatus("Enviando...")
        const data = await sendEmailRequest({
            name,
            projectName,
            email,
            telephone,
            description
        })

        if(!data)
            return setStatus("Não foi possível enviar o email. Verifique se todos os campos estão preenchidos corretamente ou tente novamente mais tarde.")

        setStatus(data.message)
        resetInputs()
    }

    return (
        <C.Form>
            {status ? <C.Status>{status}</C.Status> : ""}
            <C.Input type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)} value={name}/>
            <C.Input type="text" placeholder="Nome do projeto" onChange={(e) => setProjectName(e.target.value)} value={projectName}/>
            <C.Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
            <C.Input type="text" placeholder="Telefone para contato" onChange={(e) => setTelephone(e.target.value)} value={telephone}/>
            <C.Input type="text" placeholder="Conte mais sobre o seu projeto ou ideia..." onChange={(e) => setDescription(e.target.value)} value={description}/>
            <C.Button buttonBackground={data.buttonBackground} onClick={(e) => sendEmail(e)}>{data.buttonText}</C.Button>
        </C.Form>
    )
}

export default Form;