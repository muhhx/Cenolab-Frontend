import { footerAssets } from "./data";
import Information from "./Information";
import { Section, Background, PaperDownwardsImage, Container } from "./styles";

const Footer: React.FC = () => {
    return (
        <Section>
            <PaperDownwardsImage src={footerAssets.paperDownwards} alt={footerAssets.alt}/>
            <Container>
                <div>Call to action</div>
                <Information />
            </Container>
            <Background src={footerAssets.background} alt={footerAssets.alt}/>
        </Section>
    )
}

export default Footer;