import { navigationHome, navigationPortfolio, navigationWorkflow, navigationContato } from "../Navigation/data";
import { Section, Container, Block, Title, Description, Wrapper } from "./styles";

export const Menu: React.FC = () => {
    return (
        <Wrapper>
            <Section>
                <Container>
                    <Block>
                        <Title>{navigationHome.title}</Title>
                        <Description>{navigationHome.description}</Description>
                    </Block>
                    <Block>
                        <Title>{navigationPortfolio.title}</Title>
                        <Description>{navigationPortfolio.description}</Description>
                    </Block>
                    <Block>
                        <Title>{navigationWorkflow.title}</Title>
                        <Description>{navigationWorkflow.description}</Description>
                    </Block>
                    <Block>
                        <Title>{navigationContato.title}</Title>
                        <Description>{navigationContato.description}</Description>
                    </Block>
                </Container>
            </Section>
        </Wrapper>
    )
}

export default Menu;