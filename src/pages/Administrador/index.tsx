import { handleLogout } from "../../services/user";

const Administrador: React.FC = () => {
    return (
        <>
            <div>Página de administrador</div>
            <button onClick={handleLogout} style={{marginTop: "100px"}}>LOGOUT</button>
        </>
    )
}

export default Administrador;