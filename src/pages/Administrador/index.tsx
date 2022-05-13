import HomeProjects from "./HomeProjects"
import AllProjects from "./AllProjects"
import { useAuth } from "../../context/AuthProvider/useAuth"
import * as C from "./styles"


export default function Administrador() {
  const { logout } = useAuth()

  return (
    <C.Section>
        <C.Container>
            <C.Button onClick={logout}>Logout</C.Button>
            <HomeProjects />
            <AllProjects />
        </C.Container>
    </C.Section>
  )
}