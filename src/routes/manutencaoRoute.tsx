import { Outlet, Navigate } from "react-router-dom";
import { useManutencao } from "../context/manutencaoContext";

const ManutencaoRoute: React.FC = () => {
    const { isClosed } = useManutencao()
    return !isClosed ? <Outlet /> : <Navigate to={'/manutencao'} />
}

export default ManutencaoRoute;