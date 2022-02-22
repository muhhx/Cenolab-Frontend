import { frame2Assets } from "../data";
import { BackgroundImage, ImageContainer, Wrapper, UpperImage, BottomImage, ImageWrapper, Image } from "./styles";

interface Props {
    defaultImage: string;
}

const Frame2: React.FC<Props> = ({ defaultImage }) => {
    return (
        <Wrapper>
            <ImageContainer>
                <UpperImage src={frame2Assets.up} alt={frame2Assets.alt}/>
                <BottomImage src={frame2Assets.bottom} alt={frame2Assets.alt}/>
                <ImageWrapper>
                    <Image src={defaultImage} alt={frame2Assets.alt}/>
                </ImageWrapper>
            </ImageContainer>
            <BackgroundImage src={frame2Assets.background} alt={frame2Assets.alt}/>
        </Wrapper>
    )
}

export default Frame2;