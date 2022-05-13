import { useEffect, useState } from "react"
import { getPortfolioProjects } from "../../utils/ApiRequests"
import { IProjects } from "./types"

import Category from "./Category"
import * as C from "./styles"
import Loading from "../../components/Loading"

export default function Portfolio() {
    const [projects, setProjects] = useState<null | IProjects>(null)

    useEffect(() => {
        async function getData() {
            const data = await getPortfolioProjects()
            setProjects(data.data)
        }
        getData()
    }, [])
    
  return (
    <C.Main>
        {projects?.Entreterimento[0].length === 0 || projects?.Entreterimento === undefined ? "" : <Category projects={projects.Entreterimento} id={1}/>}
        {projects?.Social[0].length === 0 || projects?.Social === undefined ? "" : <Category projects={projects.Social} id={2}/>}
        {projects?.Coorporativo[0].length === 0 || projects?.Coorporativo === undefined ? "" : <Category projects={projects.Coorporativo} id={3}/>}
        {projects?.Comercial[0].length === 0 || projects?.Comercial === undefined ? "" : <Category projects={projects.Comercial} id={4}/>}
        {projects?.Formaturas[0].length === 0 || projects?.Formaturas === undefined ? "" : <Category projects={projects.Formaturas} id={5}/>}
    </C.Main>
  )
}
