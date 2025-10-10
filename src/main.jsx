import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import EstiloGlobal from './style/estiloGlobal'
import Home from './pages'

import {register} from "swiper/element/bundle"
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"

register()


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Home />
    <EstiloGlobal />

  </StrictMode>,
)
