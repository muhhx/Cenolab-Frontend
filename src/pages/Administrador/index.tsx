import { handleLogout } from "../../services/user";
import { handleManutencao } from "../../services/manutencao";
import { useManutencao } from "../../context/manutencaoContext";

const Administrador: React.FC = () => {
    const { isClosed } = useManutencao()
    return (
        <>
            <div>Página de administrador</div>
            <button onClick={handleLogout} style={{marginTop: "100px"}}>LOGOUT</button>
            <span>Em manutenção?</span>
            <button onClick={() => handleManutencao(true)}>SIM</button>
            <button onClick={() => handleManutencao(false)}>NAO</button>
            {isClosed ? "Esta em manutencao" :  "Nao esta em manutencao"}
        </>
    )
}

export default Administrador;