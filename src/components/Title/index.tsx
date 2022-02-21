import { CustomText, Text } from "./styles";

interface Props {
    textContent: {
        normal1: string;
        custom1: string;
        normal2: string;
        custom2: string;
        normal3?: string;
        fontColor: string;
    }
}

const Title: React.FC<Props> = ({ textContent }) => {
    return (
        <Text color={textContent.fontColor}>{textContent.normal1} <CustomText color={textContent.fontColor}>{textContent.custom1}</CustomText> {textContent.normal2} <CustomText>{textContent.custom2}</CustomText> {textContent.normal3}</Text>
    )
}

export default Title;