import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Workflow from "../pages/Workflow";
import Login from "../pages/Login";
import Administrador from "../pages/Administrador";
import Manutencao from "../pages/Manutencao";

import PrivateRoute from "./privateRoute";
import ManutencaoRoute from "./manutencaoRoute";

const Routing: React.FC = () => {
    return (
        <Routes>
            <Route element={<ManutencaoRoute />}>
                <Route path="/" element={<Home />}/>
            </Route>
            <Route element={<ManutencaoRoute />}>
                <Route path="/portfolio" element={<div>Portfolio</div>}/>
            </Route>
            <Route element={<ManutencaoRoute />}>
                <Route path="/projeto/:id" element={<div>Página de projeto</div>}/>
            </Route>
            <Route element={<ManutencaoRoute />}>
                <Route path="/workflow" element={<Workflow />}/>
            </Route>
            <Route element={<ManutencaoRoute />}>
                <Route path="/contato" element={<div>Contato</div>}/>
            </Route>
            <Route element={<ManutencaoRoute />}>
                <Route path="*" element={<div>404! Not found</div>}/>
            </Route>

            <Route path="/manutencao" element={<Manutencao />}/>
            <Route path="/login" element={<Login />}/>
            <Route element={<PrivateRoute />}>
                <Route path="/myadmin" element={<Administrador />}/>
            </Route>
        </Routes>
    )
}

export default Routing;