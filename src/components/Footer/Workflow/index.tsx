import { footerWorkflow } from '../data'
import { titleFooter } from "../../Title/data";

import Title from "../../Title";
import { Container, Description } from './styles'

const Workflow: React.FC = () => {
    return (
        <Container>
            <Title textContent={titleFooter}/>
            <Description>{footerWorkflow.paragraph1}</Description>
            <Description>{footerWorkflow.paragraph2}</Description>
            <Description>{footerWorkflow.paragraph3}</Description>
        </Container>
    )
}

export default Workflow;