import Header from './Header'
import About from './About';
import Projects from './Projects'
import Clients from './Clients';

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <About />
            <Projects />
            <Clients />
        </>
    )
}

export default Home;