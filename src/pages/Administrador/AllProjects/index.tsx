import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Project } from "../../../types/project"
import { deleteImage } from "../../../utils/FirebaseRequests"
import { getAllProjects, deletePortfolioProject } from "../../../utils/ApiRequests"

import Loading from "../../../components/Loading"
import Trash from "../../../assets/trash.png"
import Edit from "../../../assets/edit.png"
import * as C from "./styled"

export default function AllProjects() {
    const [projects, setProjects] = useState<null | Project[]>(null)

    useEffect(() => {
        async function getData() {
            const data = await getAllProjects()
            setProjects(data.data)
        }
        getData()
    }, [])

    const deleteProject = async (project: Project) => {
        try {
            for(let i = 0; i < project.images.length; i++) {
                await deleteImage(project.originalName, i)
            }
            await deletePortfolioProject(project._id)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    } 
  return (
    <C.Container>
        <C.Header>
            <C.Title>Controle de Projetos</C.Title>
            <Link to={"/myadmin/newproject"}>
                <C.NewProject>Adicionar Projeto</C.NewProject>
            </Link>
        </C.Header>
        <C.Wrapper>
            {!projects ? <Loading /> : projects.map((project, index) => (
                <C.Project key={index}>
                    <C.Thumb imageUrl={project.thumb}>
                        <C.Index>{index + 1}</C.Index>
                    </C.Thumb>
                    <C.Information>
                        <C.Description>
                            <C.Name>{project.name}</C.Name>
                            <div>{project.category}</div>
                        </C.Description>
                        <C.Options>
                            <C.Icons src={Trash} alt="Delete icon" onClick={() => deleteProject(project)}/>
                            <Link to={`/myadmin/${project._id}`}>
                                <C.Icons src={Edit} alt="Edit icon"/>
                            </Link>
                        </C.Options>
                    </C.Information>
                </C.Project>
            ))}
        </C.Wrapper>
    </C.Container>
  )
}
