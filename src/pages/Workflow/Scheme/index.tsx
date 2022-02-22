import { workflowAssets } from '../data'
import { Section, Container, Header, Title, Description, WorkflowWrapper, WorkflowPanel, WorkflowItem, WorkflowText, WorkflowBackground, WorkflowArrow, WorkflowCustomText } from "./styled";

const Information: React.FC = () => {
    return (
        <Section>
            <Container>
                <Header>
                    <Title>{workflowAssets.title}</Title>
                    <Description>{workflowAssets.description}</Description>
                </Header>
                <WorkflowWrapper>
                    <WorkflowPanel>
                        <WorkflowItem>
                            <WorkflowText>{workflowAssets.descriptions[0]}</WorkflowText>
                            <WorkflowBackground src={workflowAssets.tapes[0]} alt={workflowAssets.tapeAtl}/>
                        </WorkflowItem>
                        <WorkflowArrow src={workflowAssets.arrow} alt={workflowAssets.arrowAlt}/>
                        <WorkflowItem>
                            <WorkflowText>{workflowAssets.descriptions[1]}</WorkflowText>
                            <WorkflowBackground src={workflowAssets.tapes[1]} alt={workflowAssets.tapeAtl}/>
                        </WorkflowItem>
                        <WorkflowArrow src={workflowAssets.arrow} alt={workflowAssets.arrowAlt}/>
                        <WorkflowItem>
                            <WorkflowCustomText>{workflowAssets.descriptions[2]}</WorkflowCustomText>
                            <WorkflowBackground src={workflowAssets.tapes[2]} alt={workflowAssets.tapeAtl}/>
                        </WorkflowItem>
                    </WorkflowPanel>

                    <WorkflowPanel>
                        <WorkflowItem>
                            <WorkflowText>{workflowAssets.descriptions[3]}</WorkflowText>
                            <WorkflowBackground src={workflowAssets.tapes[3]} alt={workflowAssets.tapeAtl}/>
                        </WorkflowItem>
                        <WorkflowArrow src={workflowAssets.arrow} alt={workflowAssets.arrowAlt}/>
                        <WorkflowItem>
                            <WorkflowText>{workflowAssets.descriptions[4]}</WorkflowText>
                            <WorkflowBackground src={workflowAssets.tapes[4]} alt={workflowAssets.tapeAtl}/>
                        </WorkflowItem>
                        <WorkflowArrow src={workflowAssets.arrow} alt={workflowAssets.arrowAlt}/>
                        <WorkflowItem>
                            <WorkflowText>{workflowAssets.descriptions[5]}</WorkflowText>
                            <WorkflowBackground src={workflowAssets.tapes[5]} alt={workflowAssets.tapeAtl}/>
                        </WorkflowItem>
                        <WorkflowArrow src={workflowAssets.arrow} alt={workflowAssets.arrowAlt}/>
                        <WorkflowItem>
                            <WorkflowText>{workflowAssets.descriptions[6]}</WorkflowText>
                            <WorkflowBackground src={workflowAssets.tapes[6]} alt={workflowAssets.tapeAtl}/>
                        </WorkflowItem>
                    </WorkflowPanel>

                    <WorkflowPanel>
                        <WorkflowItem>
                            <WorkflowText>{workflowAssets.descriptions[7]}</WorkflowText>
                            <WorkflowBackground src={workflowAssets.tapes[7]} alt={workflowAssets.tapeAtl}/>
                        </WorkflowItem>
                        <WorkflowArrow src={workflowAssets.arrow} alt={workflowAssets.arrowAlt}/>
                        <WorkflowItem>
                            <WorkflowCustomText>{workflowAssets.descriptions[8]}</WorkflowCustomText>
                            <WorkflowBackground src={workflowAssets.tapes[8]} alt={workflowAssets.tapeAtl}/>
                        </WorkflowItem>
                        <WorkflowArrow src={workflowAssets.arrow} alt={workflowAssets.arrowAlt}/>
                        <WorkflowItem>
                            <WorkflowText>{workflowAssets.descriptions[9]}</WorkflowText>
                            <WorkflowBackground src={workflowAssets.tapes[9]} alt={workflowAssets.tapeAtl}/>
                        </WorkflowItem>
                    </WorkflowPanel>
                </WorkflowWrapper>
            </Container>
        </Section>
    )
}

export default Information;