import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Project } from "../../types/project";
import { getPortfolioProject } from "../../utils/ApiRequests";

import Loading from "../../components/Loading";
import paper from "../../assets/div_project_sideways.png";
import * as C from "./styles"

export default function Projeto() {
    const [project, setProject] = useState<null | Project>(null)
    const location = useLocation()

    useEffect(() => {
        async function getData() {
            const id = location.pathname.slice(11)
            const data = await getPortfolioProject(id)
            setProject(data.data)
        }
        getData()
    }, [])

  return (
    <C.Section>
        {project === null ? <Loading /> : 
            <>
                <C.Images>
                    {project.images.map((image, index) => (
                        <C.Image key={index} imageUrl={image}/>
                    ))}
                    <C.PaperContainer>
                        <C.Paper src={paper} alt={"Paper image"}/>
                    </C.PaperContainer>
                </C.Images>
                <C.InformationContainer>
                    <C.Information>
                        <C.Name>{project.name}</C.Name>
                        <C.Divisor />
                        <C.Category>{project.category}</C.Category>
                        <C.Description>{project.description}</C.Description>
                    </C.Information>
                </C.InformationContainer>
            </>
        }
    </C.Section>
  )
}
