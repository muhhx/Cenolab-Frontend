import { headerAssets } from "../data";
import { titleWhite } from "../../../components/Title/data";

import Title from "../../../components/Title";
import { Container, DivisonBackground, Paper, TitleWrapperAbsolute } from "./styles";

const Header: React.FC = () => {
    return (
        <Container>
            <TitleWrapperAbsolute>
                <Title textContent={titleWhite}/>
            </TitleWrapperAbsolute>
            <DivisonBackground>
                <Paper src={headerAssets.paper} alt={headerAssets.alt} />
            </DivisonBackground>
        </Container>
    )
}

export default Header;