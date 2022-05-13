import { useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { useCurrentPage } from "../../context/currentPageContext";
import { useAuth } from '../../context/AuthProvider/useAuth';

import Content from '../Content';
import * as C from "./styles";

const Navigation: React.FC = () => {
    const { currentPage, setCurrentPage } = useCurrentPage()
    const { isAuth } = useAuth()

    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        setCurrentPage(location.pathname)
    }, [location])

    return (
        <C.Nav>
            { !isAuth ? "" : 
            <C.AdminPanel>
                <C.AdminButton onClick={() => navigate('/myadmin')}>myAdmin</C.AdminButton>
            </C.AdminPanel>
            }

            <C.Background>
                <C.Container>
                    <Content currentPage={currentPage} mobileStatus={false} />
                </C.Container>
            </C.Background>
        </C.Nav>
    )
}

export default Navigation;