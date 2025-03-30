import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header/Header'
import Dashboard from './pages/Dashboard/Dashboard'
import Error404 from './pages/404/Error404'
import 'normalize.css'
import './styles/style.scss'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<Dashboard />} />
        <Route path="/profile" element={<Home />} />
        <Route path="/setting" element={<Error404 />} />
        <Route path="/community" element={<Error404 />} />
        <Route path="/profile" element={<Error404 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
