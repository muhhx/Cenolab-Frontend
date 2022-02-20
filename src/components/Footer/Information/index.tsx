import { Link } from 'react-router-dom'
import { footerAbout, footerContact, footerNavigation } from "../data";
import { About, AboutWrapper, Contact, Container, Description, AboutImage, Navigation, Title, ContactWrapper, ContactDescription, Icon, NavigationWrapper } from "./styles";

const Information: React.FC = () => {
    return (
        <Container>
            <About>
                <AboutWrapper>
                    <AboutImage src={footerAbout.logoImage} alt={footerAbout.alt}/>
                    <Title>{footerAbout.name}</Title>
                </AboutWrapper>
                <Description>{footerAbout.description}</Description>
                <AboutWrapper>
                    <AboutImage src={footerAbout.instagramImage} alt={footerAbout.alt}/>
                    <AboutImage src={footerAbout.facebookImage} alt={footerAbout.alt}/>
                </AboutWrapper>
            </About>
            <Contact>
                <Title>{footerContact.title}</Title>
                <ContactWrapper>
                    <ContactDescription>{footerContact.telephone}</ContactDescription>
                    <Icon src={footerContact.telephoneImage} alt={footerContact.alt}/>
                </ContactWrapper>
                <ContactWrapper>
                    <ContactDescription>{footerContact.email}</ContactDescription>
                    <Icon src={footerContact.emailImage} alt={footerContact.alt}/>
                </ContactWrapper>
                <ContactWrapper>
                    <ContactDescription>{footerContact.location}</ContactDescription>
                    <Icon src={footerContact.locationImage} alt={footerContact.alt}/>
                </ContactWrapper>
            </Contact>
            <Navigation>
                <Title>{footerNavigation.title}</Title>
                    <Link to={'/'}>
                        <NavigationWrapper>
                            <ContactDescription>{footerNavigation.home}</ContactDescription>
                            <Icon src={footerNavigation.redirectImage} alt={footerNavigation.alt}/>
                        </NavigationWrapper>
                    </Link>
                    <Link to={'/portfolio'}>
                        <NavigationWrapper>
                            <ContactDescription>{footerNavigation.portfolio}</ContactDescription>
                            <Icon src={footerNavigation.redirectImage} alt={footerNavigation.alt}/>
                        </NavigationWrapper>
                    </Link>
                    <Link to={'/workflow'}> 
                        <NavigationWrapper>
                            <ContactDescription>{footerNavigation.workflow}</ContactDescription>
                            <Icon src={footerNavigation.redirectImage} alt={footerNavigation.alt}/>
                        </NavigationWrapper>
                    </Link>
                    <Link to={'/contato'}>
                        <NavigationWrapper>
                            <ContactDescription>{footerNavigation.contact}</ContactDescription>
                            <Icon src={footerNavigation.redirectImage} alt={footerNavigation.alt}/>
                        </NavigationWrapper>
                    </Link>
            </Navigation>
        </Container>
    )    
}

export default Information;