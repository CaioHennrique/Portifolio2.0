import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import EstiloGlobal from './style/estiloGlobal'
import Home from './pages'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Home />
    <EstiloGlobal />

  </StrictMode>,
)
