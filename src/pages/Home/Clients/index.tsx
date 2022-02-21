import { clientsAssets } from '../data'

import Title from '../../../components/Title'
import { titleCompanies } from '../../../components/Title/data'
import { Section, Container, Background, ClientIcon, BackgroundWrapper, ClientWrapper } from './styles'

const Clients: React.FC = () => {
    return (
        <Section>
            <Container>
                <Title textContent={ titleCompanies }/>
                <BackgroundWrapper>
                    <ClientWrapper>
                        <ClientIcon />
                        <ClientIcon />
                        <ClientIcon />
                        <ClientIcon />
                        <ClientIcon />
                        <ClientIcon />
                    </ClientWrapper>
                    <Background src={clientsAssets.image} alt={clientsAssets.alt} />
                </BackgroundWrapper>
            </Container>
        </Section>
    )
}

export default Clients;