import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

// import { Routes, Route } from 'react-router-dom'
import Images from './homepg/Images'
import { Container, ThemeProvider } from '@mui/material'
import Test from './homepg/Test'
// import { Parallax } from 'react-scroll-parallax'

// import Header from './navbar/Header'

function Home() {
  return (
    <>
      <div className="AppMain">
        <img className="HeaderImage" src="./images/8.png" alt="Header" />

        <img className="logoImage" src="./images/logo.png" alt="Logo" />
      </div>
      <Container>
        {/* <Header /> Later change this to NavBar */}
        <div className="App">
          <Images />
        </div>
        <Test />
      </Container>
    </>
  )
}

export default Home
