import Title from '../../../components/Title'
import { titleBlack } from '../../../components/Title/data';
import { aboutData1, aboutData2, aboutData3, aboutData4 } from "../data";
import { Section, Container, Block, BlockColumn, Image, Header, Description, TextWrapper, TitleWrapper } from "./styles";

const About: React.FC = () => {
    return (
        <Section>
            <Container>
                <TitleWrapper>
                    <Title textContent={titleBlack}/>
                </TitleWrapper>
                <BlockColumn>
                    <Block>
                        <Image src={aboutData1.image} alt={aboutData1.alt}/>
                        <TextWrapper>
                            <Header>{aboutData1.line1}<br/>{aboutData1.line2}</Header>
                            <Description>{aboutData1.description}</Description>
                        </TextWrapper>
                    </Block>
                    <Block>
                        <Image src={aboutData2.image} alt={aboutData2.alt}/>
                        <TextWrapper>
                            <Header>{aboutData2.line1}<br/>{aboutData2.line2}</Header>
                            <Description>{aboutData2.description}</Description>
                        </TextWrapper>
                    </Block>
                </BlockColumn>
                <BlockColumn>
                    <Block>
                        <Image src={aboutData3.image} alt={aboutData3.alt}/>
                        <TextWrapper>
                            <Header>{aboutData3.line1}<br/>{aboutData3.line2}</Header>
                            <Description>{aboutData3.description}</Description>
                        </TextWrapper>
                    </Block>
                    <Block>
                        <Image src={aboutData4.image} alt={aboutData4.alt}/>
                        <TextWrapper>
                            <Header>{aboutData4.line1}<br/>{aboutData4.line2}</Header>
                            <Description>{aboutData4.description}</Description>
                        </TextWrapper>
                    </Block>
                </BlockColumn>
            </Container>
        </Section>
    )
};

export default About;