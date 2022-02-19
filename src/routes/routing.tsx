import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";

const Routing: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<div>Home</div>}/>
                <Route path="/portfolio" element={<div>Portfolio</div>}/>
                <Route path="/projeto/:id" element={<div>Página de projeto</div>}/>
                <Route path="/workflow" element={<div>Workflow</div>}/>
                <Route path="/contato" element={<div>Contato</div>}/>
                <Route path="*" element={<div>404! Not found</div>}/>

                <Route path="/manutencao" element={<div>Manutenção</div>}/>
                <Route path="/login" element={<div>Login</div>}/>
                <Route element={<PrivateRoute />}>
                    <Route path="/myadmin" element={<div>Página de Adm</div>}/>
                </Route>
            </Routes>
        </Router>
    )
}

export default Routing;