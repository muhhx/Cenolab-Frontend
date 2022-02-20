import { useMenu } from '../../context/menuContext';
import { Link } from 'react-router-dom'
import { logo, ham, navigationHome, navigationPortfolio, navigationWorkflow, navigationContato } from "./data";
import { Block, Description, LogoWrapper, Title, Hamburger, Image } from "./styles";

interface Props {
    mobileStatus: boolean;
    currentPage?: string;
}

const NavContent: React.FC<Props> = ({ currentPage, mobileStatus }) => {
    const { isOpen, setIsOpen } = useMenu()
    
    return (
        <>
            <Block status={mobileStatus} onClick={() => setIsOpen(false)}>
                <Link to={'/'}>
                    <Title status={mobileStatus} pageStatus={currentPage === '/' ? true : false}>{navigationHome.title}</Title>
                    <Description status={mobileStatus}>{navigationHome.description}</Description>
                </Link>
            </Block>
            <Block status={mobileStatus} onClick={() => setIsOpen(false)}>
                <Link to={'/portfolio'}>
                    <Title status={mobileStatus} pageStatus={currentPage === '/portfolio' ? true : false}>{navigationPortfolio.title}</Title>
                    <Description status={mobileStatus}>{navigationPortfolio.description}</Description>
                </Link>
            </Block>
            <Link to={'/'}>
                <LogoWrapper status={mobileStatus} onClick={() => setIsOpen(false)}>
                    <Image src={logo.source} alt={logo.alt}/>
                </LogoWrapper>
            </Link>
            <Block status={mobileStatus} onClick={() => setIsOpen(false)}>
                <Link to={'/workflow'}>
                    <Title status={mobileStatus} pageStatus={currentPage === '/workflow' ? true : false}>{navigationWorkflow.title}</Title>
                    <Description status={mobileStatus}>{navigationWorkflow.description}</Description>
                </Link>
            </Block>
            <Block status={mobileStatus} onClick={() => setIsOpen(false)}>
                <Link to={'/contato'}>
                    <Title status={mobileStatus} pageStatus={currentPage === '/contato' ? true : false}>{navigationContato.title}</Title>
                    <Description status={mobileStatus}>{navigationContato.description}</Description>
                </Link>
            </Block>
            <Hamburger status={mobileStatus} onClick={() => setIsOpen(isOpen === false ? true : false)}>
                <Image src={ham.source} alt={ham.alt}/>
            </Hamburger>
        </>
    )
}

export default NavContent;