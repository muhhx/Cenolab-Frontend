import { useState } from "react";
import { handleLogin } from "../../services/user";
import { useNavigate } from "react-router-dom";
import * as C from "./styles";

const Login = () => {
    const [status, setStatus] = useState<null | string>(null)
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const navigate = useNavigate()

    const login = async (e: React.MouseEvent) => {
        e.preventDefault()

        if(email.length === 0 || password.length === 0) {
            return setStatus("Preencha todos os campos.")
        };

        try {
            setStatus(null)
            await handleLogin(email, password)
            navigate("/myadmin")
        } catch {
            setStatus("Não foi possível fazer login. Verifique as informações nos campos!")
        }
    }

    return (
        <C.Section>
            <C.Form>
                {status ? <C.Status>{status}</C.Status> : ''}
                <C.Input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                <C.Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                <C.Button onClick={(e) => login(e)}>Login</C.Button>
            </C.Form>
        </C.Section>
    )
}

export default Login;