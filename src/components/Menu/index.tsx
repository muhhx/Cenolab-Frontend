import NavContent from "../NavContent";
import { Section, Container, Wrapper } from "./styles";

export const Menu: React.FC = () => {
    return (
        <Wrapper>
            <Section>
                <Container>
                    <NavContent mobileStatus={true} />
                </Container>
            </Section>
        </Wrapper>
    )
}

export default Menu;