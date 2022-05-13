//Routes
import { BrowserRouter as Router } from "react-router-dom"
import Routing from "./routes/routing";

//Context
import { useMenu } from "./context/MenuProvider/useMenu";
import { useCurrentPage } from "./context/currentPageContext";

import Navigation from "./components/Navigation";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

//Styles
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/globalStyles"
import { theme } from "./styles/themeProvider"

export default function App() {
    const { isOpen } = useMenu()
    const { displayFooter } = useCurrentPage()
    
  return (
    <>
        <ThemeProvider theme={theme}>
            <GlobalStyle menuStatus={isOpen}/>
            <Router>
                <Navigation />
                { isOpen ? <Menu /> : ''}
                <Routing />
                { displayFooter ? <Footer /> : ''}
            </Router>
        </ThemeProvider>
    </>
  )
}
