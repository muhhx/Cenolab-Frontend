import { information1, information2 } from "../data";
import { Section, Container, Wrapper, ImageTemp, DescriptionWrapper, DescriptionNumber, DescriptionTitle, DescriptionParagraph } from "./styled";

const Information: React.FC = () => {
    return (
        <Section>
            <Container>
                <Wrapper>
                    <ImageTemp />
                    <DescriptionWrapper>
                        <DescriptionNumber>{information1.number}</DescriptionNumber>
                        <DescriptionTitle>{information1.title}</DescriptionTitle>
                        <DescriptionParagraph>{information1.paragraph1}</DescriptionParagraph>
                        <DescriptionParagraph>{information1.paragraph2}</DescriptionParagraph>
                    </DescriptionWrapper>
                </Wrapper>
                <Wrapper>
                    <ImageTemp />
                    <DescriptionWrapper>
                        <DescriptionNumber>{information2.number}</DescriptionNumber>
                        <DescriptionTitle>{information2.title}</DescriptionTitle>
                        <DescriptionParagraph>{information2.paragraph1}</DescriptionParagraph>
                        <DescriptionParagraph>{information2.paragraph2}</DescriptionParagraph>
                    </DescriptionWrapper>
                </Wrapper>
            </Container>
        </Section>
    )
}

export default Information;