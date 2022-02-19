import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute: React.FC = () => {
    const [isTrue, setIsTrue] = useState<boolean>(false)
    return isTrue ? <Outlet /> : <Navigate to={'/'} />
}

export default PrivateRoute;