import { Link } from 'react-router-dom'
import { TextContainer, TextButton } from './styles'

const Contato: React.FC = () => {
    return (
        <TextContainer>VAMOS TRABALHAR JUNTOS! <Link to={'/contato'}><TextButton>CLIQUE AQUI</TextButton></Link> E ENTRE EM CONTATO</TextContainer>
    )
}

export default Contato;