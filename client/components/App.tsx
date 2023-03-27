import { useState, useEffect } from 'react'
import { getAllImages, getGreeting } from '../api/apiClient'
// import { getImages } from '../api/apiImages'
import Images from './Images'

function App() {
  const [images, setWidgets] = useState([] as Types.Images[]) // we hold our data in a state, and use setWidgets to change this state
  useEffect(() => {
    getAllImages()
      .then((wodget) => {
        setWidgets(wodget) // once we have our data, we can set our state to hold it
      })
      .catch((err) => alert(err.message))
  }, []) // Using [] means we only useEffect when the page is first loaded --> [ fetchWidgets ] //focus on particular element


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
