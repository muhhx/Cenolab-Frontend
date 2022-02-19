import Routing from "./routes/routing"

import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./components/styled/globalStyles"
import { theme } from "./components/styled/themeProvider"

function App() {return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <nav>Navigation</nav>
        <Routing />
        <footer>Footer</footer>
      </ThemeProvider>
    </>
  )
}

export default App
