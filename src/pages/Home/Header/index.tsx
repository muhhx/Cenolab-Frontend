import { headerAssets } from "../data";
import { titleWhite } from "../../../components/Title/data";

import Title from "../../../components/Title";
import { BackgroundVideo, Container, DivisonBackground, Paper, TitleWrapperAbsolute } from "./styles";

const Header: React.FC = () => {
    return (
        <Container>
            <TitleWrapperAbsolute>
                <Title textContent={titleWhite}/>
            </TitleWrapperAbsolute>
            <DivisonBackground>
                <Paper src={headerAssets.paper} alt={headerAssets.alt} />
            </DivisonBackground>
            <BackgroundVideo src={headerAssets.backgrounVideo} autoPlay loop muted/>
        </Container>
    )
}

export default Header;