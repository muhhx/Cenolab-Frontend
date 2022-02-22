import Frame1 from "../../../../components/Frame/Frame1";
import Frame2 from "../../../../components/Frame/Frame2";
import buttonTape from '../../../../assets/button_background.png';
import { Button, ButtonBackground, ButtonText, Container, ImageWrapper, Information, InformationNumber, InformationParagraph, InformationTitle } from "./styles";

interface Props {
    projectDetails: {
        image: string;
        number: number;
        title: string;
        description: string;
    }
}

const Content: React.FC<Props> = ({ projectDetails }) => {
    return (
        <Container direction={projectDetails.number}>
            <ImageWrapper>
                {projectDetails.number === 1 ? <Frame1 defaultImage={projectDetails.image}/> : <Frame2 defaultImage={projectDetails.image}/>}
            </ImageWrapper>
            <Information>
                <InformationNumber>0{projectDetails.number}</InformationNumber>
                <InformationTitle>{projectDetails.title}</InformationTitle>
                <InformationParagraph>{projectDetails.description}</InformationParagraph>
                <InformationParagraph>{projectDetails.description}</InformationParagraph>
                <Button>
                    <ButtonText>Conheça o projeto</ButtonText>
                    <ButtonBackground src={buttonTape} alt="Button tape."/>
                </Button>
            </Information>
        </Container>
    )
}

export default Content;