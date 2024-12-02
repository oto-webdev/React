import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='m-0 p-0 box-border overflow-x-hidden'>
      <header className='m-0 p-0'>
        <Navbar />
      </header>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <footer className='m-0 p-0'>
        <Footer />
      </footer>
    </div>
  )
}

export default App;