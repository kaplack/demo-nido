import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ColoresYSonrisas from './pages/ColoresYSonrisas'
import DashboardDemo from './pages/DashboardDemo'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demos/colores-y-sonrisas" element={<ColoresYSonrisas />} />
        <Route path="/demos/colores-y-sonrisas/admin" element={<DashboardDemo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)