import { information1, information2 } from "../data";
import Frame1 from "../../../components/Frame/Frame1";
import Frame2 from "../../../components/Frame/Frame2";
import { Section, Container, Wrapper, DescriptionWrapper, DescriptionNumber, DescriptionTitle, DescriptionParagraph, FrameWrapper } from "./styled";

const Information: React.FC = () => {
    return (
        <Section>
            <Container>
                <Wrapper>
                    <FrameWrapper>
                        <Frame1 defaultImage={information1.defaultImage} />
                    </FrameWrapper>
                    <DescriptionWrapper>
                        <DescriptionNumber>{information1.number}</DescriptionNumber>
                        <DescriptionTitle>{information1.title}</DescriptionTitle>
                        <DescriptionParagraph>{information1.paragraph1}</DescriptionParagraph>
                        <DescriptionParagraph>{information1.paragraph2}</DescriptionParagraph>
                    </DescriptionWrapper>
                </Wrapper>
                <Wrapper>
                    <FrameWrapper>
                        <Frame2 defaultImage={information2.defaultImage} />
                    </FrameWrapper>
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