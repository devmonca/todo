import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './global.css'
import { ThemeProvider } from './context/ThemeContext.tsx'
import { ModalProvider } from './context/ModalEditContext.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <ModalProvider>
        <App/>
      </ModalProvider>
    </ThemeProvider>
  </StrictMode>,
)
