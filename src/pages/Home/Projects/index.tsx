import { useEffect, useState } from 'react';
import { Project } from '../../../types/project';
import { getHomeProjects } from '../../../utils/ApiRequests';

import Content from './Content';
import Loading from '../../../components/Loading';
import * as C from './styles'

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<null | Project[]>(null)

    useEffect(() => {
        async function getData() {
            const data = await getHomeProjects()
            setProjects(data.data)
        }
        getData()
    }, [])
    
    return (
        <C.Section>
            <C.Container>
                {projects === null ? <Loading /> :
                    <>
                        <Content projectDetails={projects[0]} index={1} />
                        <Content projectDetails={projects[1]} index={2} />
                    </>
                }
            </C.Container>
        </C.Section>
    )
}

export default Projects;