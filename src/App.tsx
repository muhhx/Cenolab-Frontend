import { BrowserRouter as Router } from "react-router-dom"
import { useMenu } from "./context/menuContext"

import Routing from "./routes/routing"
import Navigation from "./components/Navigation"
import Menu from "./components/Menu"
import Footer from "./components/Footer"

import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./components/styled/globalStyles"
import { theme } from "./components/styled/themeProvider"
import './App.css'



function App() {
  const { isOpen } = useMenu()

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle menuStatus={isOpen} />
        <Router>
          <Navigation />
          { isOpen ? <Menu /> : ''}
          <Routing />
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
