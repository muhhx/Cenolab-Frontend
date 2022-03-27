import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

//Contexts
import { CurrentPageProvider } from './context/currentPageContext';
import { MenuProvider } from './context/menuContext';
import { UserProvider } from './context/userContext';

ReactDOM.render(
  <React.StrictMode>
    <CurrentPageProvider>
      <MenuProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </MenuProvider>
    </CurrentPageProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
