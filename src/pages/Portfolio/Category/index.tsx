import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Project } from "../../../types/project"
import ButtonBackgroundImage from "../../../assets/button_background.png"
import ArrowUp from "../../../assets/arrow_portfolio_up.png"
import ArrowDown from "../../../assets/arrow_portfolio_down.png"
import * as C from "./styles"

type Props = {
    projects: Project[][];
    id: number;
}

export default function Category({ projects, id }: Props) {
    const [currentProject, setCurrentProject] = useState<null | Project>(null)
    const [currentSlide, setCurrentSlide] = useState<number>(0)

    useEffect(() => {
        setCurrentProject(projects[0][0])
    }, [])

    const addIndex = () => {
        currentSlide < projects.length - 1 ? setCurrentSlide(currentSlide + 1) : setCurrentSlide(currentSlide)
    }

    const subIndex = () => {
        currentSlide > 0 ? setCurrentSlide(currentSlide - 1) : setCurrentSlide(currentSlide)
    }

  return (
    <C.Section direction={id % 2 === 0 ? true : false}>
        <C.Information>
            <C.CategoryWrapper>
                <C.Category>{currentProject?.category}</C.Category>
            </C.CategoryWrapper>
            <C.InformationWrapper>
                <C.Title>{currentProject?.name}</C.Title>
                <C.Description>{currentProject?.description}</C.Description>
            </C.InformationWrapper>
            <Link to={`/portfolio/${currentProject?._id}`} style={{width: "100%", display: "flex", justifyContent: "center"}}>
                <C.Button imageUrl={ButtonBackgroundImage}>
                    <C.ButtonText>Conheça o projeto</C.ButtonText>
                </C.Button>
            </Link>
        </C.Information>
        <C.Slides direction={id % 2 === 0 ? true : false}>
            <C.Panel>
                <C.PanelButton onClick={subIndex}>
                    <C.PanelArrow src={ArrowUp} alt="Arrow"/>
                </C.PanelButton>
                <C.PanelWrapper>
                    {projects.map((project, i) => (
                        <C.PanelOption key={i} onClick={() => setCurrentSlide(i)} display={currentSlide === i ? true : false}></C.PanelOption>
                    ))}
                </C.PanelWrapper>
                <C.PanelButton onClick={addIndex}>
                    <C.PanelArrow src={ArrowDown} alt="Arrow"/>
                </C.PanelButton>
            </C.Panel>
            <C.SlideWrapper>
                {projects.map((project, i) => (
                    <C.Slide key={i} display={currentSlide === i ? true : false}>
                        {project.map((item, i) => (
                            <C.Project key={i} displayBigger={i === 0 && project.length > 0 ? true : false} onClick={() => setCurrentProject(item)} imageUrl={item.thumb}>
                                {currentProject?._id === item._id ? <C.Selected><C.SelectedText>Selecionado</C.SelectedText></C.Selected> : ''}
                            </C.Project>
                        ))}
                    </C.Slide>
                ))}
            </C.SlideWrapper>
        </C.Slides>
    </C.Section>
  )
}
