import { useState } from "react";
import emailjs from '@emailjs/browser';
import { data } from "./data";
import * as C from "./styles";

const Form: React.FC = () => {
    const [status, setStatus] = useState<null | string>(null)

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs.sendForm("gmail", "service_k68gbyb", e.currentTarget, "37YrThwjmylNab1u_")
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    }

    return (
        <C.Form onSubmit={(e) => sendEmail(e)}>
            {status ? <C.Status>{status}</C.Status> : ''}
            <C.Input type="text" placeholder="Nome" name="nome"/>
            <C.Input type="text" placeholder="Nome do projeto" name="projeto"/>
            <C.Input type="email" placeholder="Email" name="email"/>
            <C.Input type="text" placeholder="Telefone para contato" name="ctt"/>
            <C.Input type="text" placeholder="Conte mais sobre o seu projeto ou ideia..." name="descricao"/>
            <input type="submit" value="Send" />
            {/* <C.Button buttonBackground={data.buttonBackground}>{data.buttonText}</C.Button> */}
        </C.Form>
    )
}

export default Form;