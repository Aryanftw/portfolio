import React from 'react'
import './main.css'
import Intropage from './components/Intropage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';

const App = () => {
  return (
    <BrowserRouter basename="/portfolio">
      <Routes>
        <Route path="/" element={<Intropage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
