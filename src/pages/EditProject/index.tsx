import { useEffect, useState } from "react"
import { Project } from "../../types/project"
import { useNavigate } from "react-router-dom"
import { getPortfolioProject, updatePortfolioProject } from "../../utils/ApiRequests"

import * as C from "./styles"

export default function EditProject() {
  const categories = ["Entreterimento", "Social", "Coorporativo", "Comercial", "Formaturas"]
  const [project, setProject] = useState<null | Project>(null)
  const [thumb, setThumb] = useState<null | string>(null)
  const [categoryName, setCategoryName] = useState<null | string>(null)
  const [newName, setNewName] = useState<string>("")
  const [newDescription, setNewDescription] = useState<string>("")
  const [err, setErr] = useState<null | string>(null)
  const navigate = useNavigate()

  useEffect(() => {
    async function getData() {
      const id = location.pathname.slice(9)
      const response = await getPortfolioProject(id)

      if(response) {
        setProject(response.data)
        setThumb(response.data.thumb)
        setCategoryName(response.data.category)
      }
    }
    getData()
  }, [])

  async function updateProject() {
    if(!project || !thumb || !categoryName)
      return setErr("Algo inesperado aconteceu! Tente novamente mais tarde")
    
    const updated = {
      thumb: thumb,
      category: categoryName,
      name: newName || project.name,
      description: newDescription || project.description
    }

    setErr(null)
    await updatePortfolioProject(project._id, updated)
    navigate("/myadmin")
  }

  return (
    <C.Section>
      <C.Container>
        <C.Wrapper>
          <C.Span>Aviso: É recomendado que você digite o nome e a descrição do projeto em um documento word, e apenas copie e cole nos inputs</C.Span>
        </C.Wrapper>
        {err ? <C.Error>{err}</C.Error> : ''}
        <C.Wrapper>
          <C.Title>Nome</C.Title>
          <C.Span>{project?.name}</C.Span>
          <C.Input placeholder="Digite o novo nome para o projeto" onChange={(e) => setNewName(e.target.value)}/>
        </C.Wrapper>
        <C.Wrapper>
          <C.Title>Descrição</C.Title>
          <C.Span>{project?.description}</C.Span>
          <C.Input placeholder="Digite a nova descrição do projeto" onChange={(e) => setNewDescription(e.target.value)}/>
        </C.Wrapper>
        <C.Wrapper>
          <C.Title>Categoria</C.Title>
          <C.Span>Clique em cima da categoria para selecionar</C.Span>
          <C.CategoryWrapper>
            {categories.map((category, index) => (
              <C.Category key={index} isSelected={category === categoryName ? true : false} onClick={() => setCategoryName(category)}>{category}</C.Category>
            ))}
          </C.CategoryWrapper>
        </C.Wrapper>
        <C.Wrapper>
          <C.Title>Thumb Image</C.Title>
          <C.Span>Clique em cima da imagem para selecionar</C.Span>
          <C.ImagesContainer>
            {project?.images.map((image, index) => (
              <C.Image key={index} imageUrl={image} onClick={() => setThumb(image)}>
                {image === thumb ? <C.Selected /> : ''}
              </C.Image>
            ))}
          </C.ImagesContainer>
        </C.Wrapper>
        <C.Button onClick={updateProject}>Salvar mudanças</C.Button>
      </C.Container>
    </C.Section>
  )
}
