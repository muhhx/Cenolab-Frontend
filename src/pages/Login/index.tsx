import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { data } from "./data";
import * as C from "./styles";

const Login = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    
    const { authenticate } = useAuth()
    const navigate = useNavigate()

    const login = async (e: React.MouseEvent) => {
        e.preventDefault()
        await authenticate(email, password)
        navigate("/myadmin")
    }

    return (
        <C.Section backgroundImage={data.backgroundImage}>
            <C.Form>
                <C.Input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                <C.Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                <C.Button onClick={(e) => login(e)} buttonBackround={data.buttonBackground}>{data.buttonText}</C.Button>
            </C.Form>
        </C.Section>
    )
}

export default Login;