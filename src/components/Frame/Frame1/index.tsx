import { frame1Assets } from "../data";
import * as C from "./styles";

interface Props {
    defaultImage: string;
}

const Frame1: React.FC<Props> = ({ defaultImage }) => {
    return (
        <C.Wrapper>
            <C.ImageContainer>
                <C.UpperImage src={frame1Assets.up} alt={frame1Assets.alt}/>
                <C.BottomImage src={frame1Assets.bottom} alt={frame1Assets.alt}/>
                <C.ImageWrapper imageUrl={defaultImage} />
            </C.ImageContainer>
            <C.BackgroundImage src={frame1Assets.background} alt={frame1Assets.alt}/>
        </C.Wrapper>
    )
}

export default Frame1;