import { useState } from "react";
import { handleLogin } from "../../services/user";
import { useNavigate } from "react-router-dom";

import { data } from "./data";
import * as C from "./styles";

const Login = () => {
    const [status, setStatus] = useState<null | string>(null)
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const navigate = useNavigate()

    const login = async (e: React.MouseEvent) => {
        e.preventDefault()

        if(email.length === 0 || password.length === 0) {
            return setStatus(`${data.statusEmpty}`)
        };

        try {
            setStatus(null)
            await handleLogin(email, password)
            navigate("/myadmin")
        } catch {
            setStatus(`${data.statusError}`)
        }
    }

    return (
        <C.Section backgroundImage={data.backgroundImage}>
            <C.Form>
                {status ? <C.Status>{status}</C.Status> : ''}
                <C.Input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                <C.Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                <C.Button onClick={(e) => login(e)}>{data.buttonText}</C.Button>
            </C.Form>
        </C.Section>
    )
}

export default Login;