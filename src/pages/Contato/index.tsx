import Form from "../../components/Form";
import { data } from "./data";
import * as C from "./styles";

const Contato: React.FC = () => {
    return (
        <C.Section>
            <C.Block1>
                <C.Information>
                    <C.TextWrapper backgroundImage={data.contatoBackground} />
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

export default Contato;