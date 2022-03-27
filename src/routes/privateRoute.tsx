import { Outlet, Navigate } from "react-router-dom";
import { useUser } from "../context/userContext";

const PrivateRoute: React.FC = () => {
    const { currentUser } = useUser()
    return currentUser ? <Outlet /> : <Navigate to={'/login'} />
}

export default PrivateRoute;