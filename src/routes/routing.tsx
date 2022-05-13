import { Routes, Route } from "react-router-dom";

//Pages
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Projeto from "../pages/Projeto";
import Workflow from "../pages/Workflow";
import Contato from "../pages/Contato";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Administrador from "../pages/Administrador";
import NewProject from "../pages/NewProject";
import EditProject from "../pages/EditProject";
import PrivateRoute from "./privateRoute";

const Routing: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/portfolio" element={<Portfolio />}/>
            <Route path="/portfolio/:id" element={<Projeto />}/>
            <Route path="/workflow" element={<Workflow />}/>
            <Route path="/contato" element={<Contato />}/>
            <Route path="*" element={<NotFound />}/>
            
            <Route path="/login" element={<Login />}/>
            <Route element={<PrivateRoute />}>
                <Route path="/myadmin" element={<Administrador />}/>
                <Route path="/myadmin/:id" element={<EditProject />}/>
                <Route path="/myadmin/newproject" element={<NewProject />}/>
            </Route>
        </Routes>
    )
}

export default Routing;