import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

// import { Routes, Route } from 'react-router-dom'
import Images from './homepg/Images'
import { Container, ThemeProvider } from '@mui/material'
// import Header from './navbar/Header'
import ButtonTheme from './button/ButtonTheme'
import NavBar from './navbar/Navbar'

//
import Home from './Home'
import About from './About'
import ResponsiveAppBar from './navbar/TestNav'

function App() {
  return (
    <>
      <ThemeProvider theme={ButtonTheme}>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
