import { BrowserRouter as Router } from "react-router-dom"
import { useMenu } from "./context/menuContext"
import { useCurrentPage } from "./context/currentPageContext"
import { useManutencao } from "./context/manutencaoContext"

import Routing from "./routes/routing"
import Navigation from "./components/Navigation"
import Menu from "./components/Menu"
import Footer from "./components/Footer"

import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./components/globalStyles"
import { theme } from "./components/themeProvider"
import './App.css'



function App() {
  const { isOpen } = useMenu()
  const { displayFooter } = useCurrentPage()
  const { isClosed } = useManutencao()

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle menuStatus={isOpen} />
        <Router>
          {!isClosed ? <Navigation /> : ''}
          { isOpen ? <Menu /> : ''}
          <Routing />
          {displayFooter ? <Footer /> : ''}
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
