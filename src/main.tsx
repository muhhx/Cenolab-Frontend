import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';

//Context
import { CurrentPageProvider } from './context/currentPageContext';
import { MenuProvider} from './context/MenuProvider';
import { AuthProvider } from './context/AuthProvider';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <CurrentPageProvider>
        <MenuProvider>
          <App />
        </MenuProvider>
      </CurrentPageProvider>
    </AuthProvider>
  </React.StrictMode>
);