import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
   <div className="bg-red-100 min-h-screen scroll-smooth">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
)
