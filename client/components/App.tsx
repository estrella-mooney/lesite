import { useState, useEffect } from 'react'
import { getAllImages, getGreeting } from '../api/apiClient'
// import { Routes, Route } from 'react-router-dom'
import { ImageDetails } from '../../common/Images'
import Images from './Images'
import { Container } from '@mui/material'
import Header from './Header'

function App() {
  return (
    <>
      <div className="AppMain">
        <img className="HeaderImage" src="./images/image1.jpg" alt="Header" />
        <img className="logoImage" src="./images/logo.png" alt="Logo" />

        <Container>
          <Header />
          <div className="App">
            <Images />
          </div>
        </Container>
      </div>
    </>
  )
}

export default App
