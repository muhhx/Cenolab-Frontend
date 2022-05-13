import { useState } from "react"
import { insertImage } from "../../utils/FirebaseRequests"
import { useNavigate } from "react-router-dom"
import { createPortfolioProject } from "../../utils/ApiRequests"

import * as C from "./styles"

export default function NewProject() {
  const categories = ["Entreterimento", "Social", "Coorporativo", "Comercial", "Formaturas"]
  const types = ["image/png", "image/jpeg", "image/jpg"]

  const [newName, setNewName] = useState<string>("")
  const [newDescription, setNewDescription] = useState<string>("")
  const [categoryName, setCategoryName] = useState<null | string>(null)
  const [err, setErr] = useState<null | string>(null)
  const [image, setImages] = useState<null | FileList>(null)
  const navigate = useNavigate()
  
  const createProject = async () => {
    if(!newName) return setErr("Informe um nome")
    if(!newDescription) return setErr("Informe uma descrição")
    if(!categoryName) return setErr("Categoria nao selecionada")
    if(!image) return setErr("Envie uma imagem")
    
    for(let i = 0; i < image.length; i++) {
      if(!types.includes(image[i].type)) return setErr("Escolha um tipo de arquivo correto! (PNG, JPEG, JPG)")
    }

    try {
      setErr("Aguarde... Isso pode demorar um pouco, mas é importante que você não saia desta página!")

      let url = []
      for(let i = 0; i < image.length; i++) {
        const urlData = await insertImage(image[i], newName, i)
        url.push(urlData)
      }

      const projectData = {
        name: newName,
        description: newDescription,
        category: categoryName,
        images: url
      }

      await createPortfolioProject(projectData)
      navigate("/myadmin")
    } catch (error) {
      return setErr("Não foi possível criar o projeto!")
    }
  }

  return (
    <C.Section>
      <C.Container>
        <C.Wrapper>
          <C.Span>Aviso: É recomendado que você digite o nome e a descrição do projeto em um documento word, e apenas copie e cole nos inputs</C.Span>
          <C.Span>Aviso: São aceitos apenas os seguintes formatos de imagem: PNG, JPEG, JPG</C.Span>
        </C.Wrapper>
        {err ? <C.Error>{err}</C.Error> : ''}
        <C.Wrapper>
          <C.Title>Nome do projeto</C.Title>
          <C.Input placeholder="Digite aqui o nome do projeto" onChange={(e) => setNewName(e.target.value)}/>
        </C.Wrapper>
        <C.Wrapper>
          <C.Title>Descrição do projeto</C.Title>
          <C.Input placeholder="Digite aqui a descrição do projeto" onChange={(e) => setNewDescription(e.target.value)}/>
        </C.Wrapper>
        <C.Wrapper>
          <C.Title>Categoria</C.Title>
          <C.CategoryWrapper>
            {categories.map((category, index) => (
              <C.Category key={index} isSelected={category === categoryName ? true : false} onClick={() => setCategoryName(category)}>{category}</C.Category>
            ))}
          </C.CategoryWrapper>
        </C.Wrapper>
        <C.Wrapper>
          <C.Title>Imagens</C.Title>
          <input type="file" onChange={(e) => setImages(e.target.files)} multiple/>
        </C.Wrapper>
        <C.Button onClick={createProject}>Criar projeto</C.Button>
      </C.Container>
    </C.Section>
  )
}
