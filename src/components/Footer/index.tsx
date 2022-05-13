import { useCurrentPage } from "../../context/currentPageContext";

import { footerAssets } from "./data";

import Contato from "./Contato";
import Workflow from "./Workflow";
import Information from "./Information";
import { Section, Background, PaperImage, Container } from "./styles";

const Footer: React.FC = () => {
    const { currentPage } = useCurrentPage()

    return (
        <Section>
            <Container>
                <PaperImage src={footerAssets.paperDownwards} alt={footerAssets.alt}/>
                { currentPage !== '/workflow' ? <Contato /> : <Workflow />}
                <PaperImage src={footerAssets.paperUpwards} alt={footerAssets.alt}/>
                <Background src={footerAssets.background} alt={footerAssets.alt}/>
            </Container>
            <Information />
        </Section>
    )
}

export default Footer;