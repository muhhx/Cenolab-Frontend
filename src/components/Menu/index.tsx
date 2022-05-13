import Content from "../Content";
import { Section, Container, Wrapper } from "./styles";

export const Menu: React.FC = () => {
    return (
        <Wrapper>
            <Section>
                <Container>
                    <Content mobileStatus={true} />
                </Container>
            </Section>
        </Wrapper>
    )
}

export default Menu;