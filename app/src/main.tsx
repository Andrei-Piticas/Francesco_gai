import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.tsx'

// Sotto path "/francesco_gai/" (e simili) il Router ha bisogno del basename,
// altrimenti la route "/" non matcha e la pagina resta vuota.
// In locale su "/" il pathname è già root: nessun prefisso.
const basename = window.location.pathname.replace(/\/[^/]*$/, '') || '/'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
