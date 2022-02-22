import { frame1Assets } from "../data";
import { BackgroundImage, ImageContainer, Wrapper, UpperImage, BottomImage, ImageWrapper, Image } from "./styles";

interface Props {
    defaultImage: string;
}

const Frame1: React.FC<Props> = ({ defaultImage }) => {
    return (
        <Wrapper>
            <ImageContainer>
                <UpperImage src={frame1Assets.up} alt={frame1Assets.alt}/>
                <BottomImage src={frame1Assets.bottom} alt={frame1Assets.alt}/>
                <ImageWrapper>
                    <Image src={defaultImage} alt={frame1Assets.alt}/>
                </ImageWrapper>
            </ImageContainer>
            <BackgroundImage src={frame1Assets.background} alt={frame1Assets.alt}/>
        </Wrapper>
    )
}

export default Frame1;