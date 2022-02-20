import { useCurrentPage } from "../../context/currentPageContext";

import { footerAssets } from "./data";

import Contato from "./Contato";
import Workflow from "./Workflow";
import Information from "./Information";
import { Section, Background, PaperDownwardsImage, Container } from "./styles";

const Footer: React.FC = () => {
    const { currentPage } = useCurrentPage()

    return (
        <Section>
            <PaperDownwardsImage src={footerAssets.paperDownwards} alt={footerAssets.alt}/>
            <Container>
                { currentPage !== '/workflow' ? <Contato /> : <Workflow />}
                <Information />
            </Container>
            <Background src={footerAssets.background} alt={footerAssets.alt}/>
        </Section>
    )
}

export default Footer;