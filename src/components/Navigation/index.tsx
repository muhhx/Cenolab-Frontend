import { useMenu } from "../../context/menuContext";
import { logo, ham, navigationHome, navigationPortfolio, navigationWorkflow, navigationContato } from "./data";
import { Block, Container, Description, LogoWrapper, Nav, Title, Hamburger, Background, Image } from "./styles";

const Navigation: React.FC = () => {
    const { isOpen, setIsOpen } = useMenu()

    return (
        <Nav>
            <Background>
                <Container>
                    <Block>
                        <Title>{navigationHome.title}</Title>
                        <Description>{navigationHome.description}</Description>
                    </Block>
                    <Block>
                        <Title>{navigationPortfolio.title}</Title>
                        <Description>{navigationPortfolio.description}</Description>
                    </Block>
                    <LogoWrapper>
                        <Image src={logo.source} alt={logo.alt}/>
                    </LogoWrapper>
                    <Block>
                        <Title>{navigationWorkflow.title}</Title>
                        <Description>{navigationWorkflow.description}</Description>
                    </Block>
                    <Block>
                        <Title>{navigationContato.title}</Title>
                        <Description>{navigationContato.description}</Description>
                    </Block>
                    <Hamburger onClick={() => setIsOpen(isOpen === false ? true : false)}>
                        <Image src={ham.source} alt={ham.alt}/>
                    </Hamburger>
                </Container>
            </Background>
        </Nav>
    )
}

export default Navigation;
{/* 
//Pegar current Page e estilizar o Title para bold se for a página correta;
//Pegar current Page e mudar pra preto ou branco as cores dependendo */}