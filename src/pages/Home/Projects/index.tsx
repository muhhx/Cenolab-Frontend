import { projectsExample1, projectsExample2 } from '../data';
import Content from './Content';
import { Section, Container } from './styles'

const Projects: React.FC = () => {
    return (
        <Section>
            <Container>
                <Content projectDetails={projectsExample1} />
                <Content projectDetails={projectsExample2} />
            </Container>
        </Section>
    )
}

export default Projects;