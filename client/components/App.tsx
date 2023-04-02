import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

// import { Routes, Route } from 'react-router-dom'
import Images from './homepg/Images'
import { Container, ThemeProvider } from '@mui/material'
import Header from './navbar/Header'
import ButtonTheme from './button/ButtonTheme'
import NavBar from './navbar/Navbar'

//
import Home from './Home'

function App() {
  return (
    <>
      <ThemeProvider theme={ButtonTheme}>
        <NavBar />
        <Routes>
          <Route path="/api/v1/welcome" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
