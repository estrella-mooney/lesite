import { useState, useEffect } from 'react'
import { getAllImages, getGreeting } from '../api/apiClient'
// import { Routes, Route } from 'react-router-dom'
import { ImageDetails } from '../../common/Images'
import Images from './Images'

function App() {
  return (
    <div className="App">
      <Images />
    </div>
  )
}

export default App
