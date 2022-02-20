import { BrowserRouter as Router } from "react-router-dom"
import { useMenu } from "./context/menuContext"

import Routing from "./routes/routing"
import Navigation from "./components/Navigation"

import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./components/styled/globalStyles"
import { theme } from "./components/styled/themeProvider"
import Menu from "./components/Menu"


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
          <footer>Footer</footer>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
