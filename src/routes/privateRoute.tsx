import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider/useAuth";

const PrivateRoute: React.FC = () => {
    const { isAuth } = useAuth()
    return isAuth ? <Outlet /> : <Navigate to={'/login'} />
}

export default PrivateRoute;