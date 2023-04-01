import { useState, useEffect } from 'react'
// import { Routes, Route } from 'react-router-dom'
import Images from './homepg/Images'
import { Container } from '@mui/material'
import Header from './navbar/Header'

//

function App() {
  return (
    <>
      <div className="AppMain">
        <img className="HeaderImage" src="./images/image1.jpg" alt="Header" />
        <img className="logoImage" src="./images/logo.png" alt="Logo" />
      </div>
      <Container>
        <Header />
        <div className="App">
          <Images />
        </div>
      </Container>
    </>
  )
}

export default App
