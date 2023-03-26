import { useState, useEffect } from 'react'
import { getGreeting } from '../apiClient'
import { getImages } from '../api/apiImages'
import Images from './Images'

const App = () => {
  return (
    <>
      <p>Hi</p>
      <Images />
      {/* <Routes>
        <Route path="/" element={<getImages />} />
      </Routes> */}
    </>
  )
}

export default App
