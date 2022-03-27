import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Workflow from "../pages/Workflow";
import Login from "../pages/Login";
import Administrador from "../pages/Administrador";

import PrivateRoute from "./privateRoute";

const Routing: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/portfolio" element={<div>Portfolio</div>}/>
            <Route path="/projeto/:id" element={<div>Página de projeto</div>}/>
            <Route path="/workflow" element={<Workflow />}/>
            <Route path="/contato" element={<div>Contato</div>}/>
            <Route path="*" element={<div>404! Not found</div>}/>

            <Route path="/manutencao" element={<div>Manutenção</div>}/>
            <Route path="/login" element={<Login />}/>
            <Route element={<PrivateRoute />}>
                <Route path="/myadmin" element={<Administrador />}/>
            </Route>
        </Routes>
    )
}

export default Routing;