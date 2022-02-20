import { useEffect } from 'react'
import { useLocation } from "react-router-dom";
import { useCurrentPage } from "../../context/currentPageContext";
import Content from '../Content';
import { Container, Nav, Background } from "./styles";

const Navigation: React.FC = () => {
    const { currentPage, setCurrentPage } = useCurrentPage()
    const location = useLocation()

    console.log(currentPage)

    useEffect(() => {
        setCurrentPage(location.pathname)
    }, [location])

    return (
        <Nav>
            <Background>
                <Container>
                    <Content currentPage={currentPage} mobileStatus={false} />
                </Container>
            </Background>
        </Nav>
    )
}

export default Navigation;
{/* 
//Pegar current Page e estilizar o Title para bold se for a página correta;
//Pegar current Page e mudar pra preto ou branco as cores dependendo 
//Navegar para as outras paginas (fazer o mesmo para o menu mobile)*/}