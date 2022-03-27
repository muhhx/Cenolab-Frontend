import Form from "../../components/Form";
import { data } from "./data";
import * as C from "./styles";

const Manutencao: React.FC = () => {
    return (
        <C.Section>
            <C.Block1>
                <C.Information>
                    <C.Wrapper>
                        <C.Logo src={data.logo} alt={data.logoAlt}/>
                        <C.Title>{data.title}</C.Title>
                        <C.Description>{data.description}</C.Description>
                    </C.Wrapper>
                    <C.Wrapper>
                        <C.FooterContainer1>
                            <C.Icon src={data.iconWhats} alt={data.iconAlt}/>
                            <C.FooterContainer2>
                                <C.Subtitle>{data.subtitle1}</C.Subtitle>
                                <C.Text>{data.text1}</C.Text>
                            </C.FooterContainer2>
                        </C.FooterContainer1>
                        <C.FooterContainer1>
                            <C.Icon src={data.iconPhone} alt={data.iconAlt}/>
                            <C.FooterContainer2>
                                <C.Subtitle>{data.subtitle2}</C.Subtitle>
                                <C.Text>{data.text2}</C.Text>
                            </C.FooterContainer2>
                        </C.FooterContainer1>
                        <C.FooterContainer1>
                            <C.Icon src={data.iconEmail} alt={data.iconAlt}/>
                            <C.FooterContainer2>
                                <C.Subtitle>{data.subtitle3}</C.Subtitle>
                                <C.Text>{data.text3}</C.Text>
                            </C.FooterContainer2>
                        </C.FooterContainer1>
                    </C.Wrapper>
                </C.Information>
            </C.Block1>
            <C.Block2 backgroundImage={data.backgroundImage}>
                <C.FormContainer>
                    <Form />
                </C.FormContainer>
                <C.Paper backgroundPaper1={data.paperSideways} backgroundPaper2={data.paperDownwards}/>
            </C.Block2>
        </C.Section>
    )
};

export default Manutencao;