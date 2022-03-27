import { useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom";

import { useCurrentPage } from "../../context/currentPageContext";
import { useUser } from '../../context/userContext';

import Content from '../Content';
import * as C from "./styles";

const Navigation: React.FC = () => {
    const { currentPage, setCurrentPage } = useCurrentPage()
    const { currentUser } = useUser()

    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        setCurrentPage(location.pathname)
    }, [location])

    return (
        <C.Nav>
            {!currentUser ? '' : 
            <C.AdminPanel>
                <C.AdminButton onClick={() => navigate('/myadmin')}>myAdmin</C.AdminButton>
            </C.AdminPanel>}
            
            <C.Background>
                <C.Container>
                    <Content currentPage={currentPage} mobileStatus={false} />
                </C.Container>
            </C.Background>
        </C.Nav>
    )
}

export default Navigation;
{/* 
//Pegar current Page e estilizar o Title para bold se for a página correta;
//Pegar current Page e mudar pra preto ou branco as cores dependendo 
//Navegar para as outras paginas (fazer o mesmo para o menu mobile)*/}