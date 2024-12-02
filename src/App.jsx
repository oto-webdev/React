import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='m-0 p-0 box-border overflow-x-hidden'>
      <header className=''>
        <Navbar />
      </header>
      <Routes>

      </Routes>
    </div>
  )
}

export default App;