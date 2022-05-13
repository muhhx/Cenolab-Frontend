import { useState } from "react"
import { Project } from "../../../../types/project"
import { updatePortfolioProject } from "../../../../utils/ApiRequests"
import * as C from "./styles"

type Props = {
    currentProject: Project;
    allProjects: Project[] | null;
}

export default function Panel({ currentProject, allProjects }: Props) {
    const [newProject, setNewProject] = useState<null | Project>(null)

    async function updateProject() {
        if(!newProject)
            return 
        
        await updatePortfolioProject(currentProject._id, { homePage: false })
        await updatePortfolioProject(newProject._id, { homePage: true })
        window.location.reload()
    }

  return (
    <C.Project>
        <C.Thumb imageUrl={currentProject.thumb}/>
        <C.Information>
            <C.Data>
                <C.Name>{currentProject.name}</C.Name>
                <span>{currentProject._id}</span>
                <span>{currentProject.category}</span>
            </C.Data>
            <C.Options>
                <C.Wrapper>
                    <span>Selecione novo projeto:</span>
                    <C.Button isSelected={newProject === null ? false : true} onClick={updateProject}>Salvar alterações</C.Button>
                </C.Wrapper>
                <C.Wrapper>
                    <C.ProjectsContainer>
                        <C.Itens>
                            {allProjects?.filter(project => project._id !== currentProject._id).map((project, index) => (
                                <C.Option key={index} isSelected={project._id === newProject?._id ? true : false} onClick={() => setNewProject(project)}>{project.name}</C.Option>
                            ))}
                        </C.Itens>
                    </C.ProjectsContainer>
                </C.Wrapper>
            </C.Options>
        </C.Information>
    </C.Project>
  )
}

