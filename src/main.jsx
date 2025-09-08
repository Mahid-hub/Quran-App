import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@fortawesome/fontawesome-free/css/all.min.css";
import './index.css'
import App from './App.jsx';
import SurahPage from './SurahPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SurahPage />
  </StrictMode>,
)
