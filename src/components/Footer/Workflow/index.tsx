import { footerWorkflow } from '../data'
import { titleWhite } from "../../Title/data";

import Title from "../../Title";
import { Container, Description } from './styles'

const Workflow: React.FC = () => {
    return (
        <Container>
            <Title textContent={titleWhite}/>
            <Description>{footerWorkflow.paragraph1}</Description>
            <Description>{footerWorkflow.paragraph2}</Description>
            <Description>{footerWorkflow.paragraph3}</Description>
            <Description>{footerWorkflow.paragraph4}</Description>
            <Description>{footerWorkflow.paragraph5}</Description>
        </Container>
    )
}

export default Workflow;