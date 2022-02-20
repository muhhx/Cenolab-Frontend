import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { CurrentPageProvider } from './context/currentPageContext'
import { MenuProvider } from './context/menuContext'

ReactDOM.render(
  <React.StrictMode>
    <CurrentPageProvider>
      <MenuProvider>
        <App />
      </MenuProvider>
    </CurrentPageProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
