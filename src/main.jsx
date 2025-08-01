import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Components/Header/Header.jsx'
import Home from './Components/Home/Home.jsx'
import './main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Home/>
  </StrictMode>,
)
