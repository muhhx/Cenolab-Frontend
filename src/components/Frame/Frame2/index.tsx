import { frame2Assets } from "../data";
import * as C from "./styles";

interface Props {
    defaultImage: string;
}

const Frame2: React.FC<Props> = ({ defaultImage }) => {
    return (
        <C.Wrapper>
            <C.ImageContainer>
                <C.UpperImage src={frame2Assets.up} alt={frame2Assets.alt}/>
                <C.BottomImage src={frame2Assets.bottom} alt={frame2Assets.alt}/>
                <C.ImageWrapper imageUrl={defaultImage} />
            </C.ImageContainer>
            <C.BackgroundImage src={frame2Assets.background} alt={frame2Assets.alt}/>
        </C.Wrapper>
    )
}

export default Frame2;