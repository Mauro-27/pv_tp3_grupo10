//cuando comienza con mayuscula es un componente
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
