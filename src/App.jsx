import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Demo from './pages/Demo'
import FloatingShape from './components/FloatingShape'
import Footer from './components/Footer'
import GoldenJubilee from './pages/GoldenJubilee'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar />
        <FloatingShape />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/GoldenJubilee" element={<GoldenJubilee />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App