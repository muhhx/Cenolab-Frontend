import { useEffect, useState } from "react"
import { Project } from "../../../types/project"
import { getHomeProjects, getAllProjects } from "../../../utils/ApiRequests"

import Panel from "./Panel"
import Loading from "../../../components/Loading"
import * as C from "./styles"

export default function HomeProjects() {
  const [homeProjects, setHomeProjects] = useState<null | Project[]>(null)
  const [allProjects, setAllProjects] = useState<null | Project[]>(null)
  
  useEffect(() => {
    async function getData() {
      const home = await getHomeProjects()
      const all = await getAllProjects()
      setHomeProjects(home.data)
      setAllProjects(all.data)
    }
    getData()
  }, [])

    return (
    <C.Container>
      <C.Header>
        <C.Title>Projetos Home Page</C.Title>
      </C.Header>
      <C.Wrapper>
        {!homeProjects ? <Loading /> : 
        homeProjects.map((project, index) => (
          <Panel key={index} currentProject={project} allProjects={allProjects}/>
        ))}
      </C.Wrapper>
    </C.Container>
  )
}
