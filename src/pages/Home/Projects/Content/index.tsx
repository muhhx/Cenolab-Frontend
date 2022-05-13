import { Link } from "react-router-dom";
import { Project } from "../../../../types/project";
import Frame1 from "../../../../components/Frame/Frame1";
import Frame2 from "../../../../components/Frame/Frame2";
import buttonTape from '../../../../assets/button_background.png';
import * as C from "./styles";

type Props = {
    index: number;
    projectDetails: Project;
}

const Content: React.FC<Props> = ({ projectDetails, index }) => {
    return (
        <C.Container direction={index}>
            <C.ImageWrapper>
                {index === 1 ? <Frame1 defaultImage={projectDetails.thumb}/> : <Frame2 defaultImage={projectDetails.thumb}/>}
            </C.ImageWrapper>
            <C.Information>
                <C.InformationNumber>0{index}</C.InformationNumber>
                <C.InformationTitle>{projectDetails.name}</C.InformationTitle>
                <C.InformationParagraph>{projectDetails.description}</C.InformationParagraph>
                <Link to={`/portfolio/${projectDetails._id}`}>
                    <C.Button>
                        <C.ButtonText>Conheça o projeto</C.ButtonText>
                        <C.ButtonBackground src={buttonTape} alt="Button tape."/>
                    </C.Button>
                </Link>
            </C.Information>
        </C.Container>
    )
}

export default Content;