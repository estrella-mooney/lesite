import { useState, useEffect } from 'react'
import { getAllImages, getGreeting } from '../api/apiClient'
// import { Routes, Route } from 'react-router-dom'
import { ImageDetails } from '../../common/Images'
import Images from './Images'
import { Container } from '@mui/material'
import Header from './Header'

function App() {
  return (
    <Container>
      <Header />
      <div className="App">
        <Images />
      </div>
    </Container>
  )
}

export default App
