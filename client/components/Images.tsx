import { useState, useEffect } from 'react'
import { ImageDetails } from '../../common/Images'
import { getAllImages } from '../api/apiClient'

function Images() {
  const [images, setImages] = useState(null as ImageDetails[] | null)

  useEffect(() => {
    getAllImages()
      .then((imageArr) => {
        setImages(imageArr)
      })
      .catch((err) => console.log(err.message))
  }, [])

  return (
    <div>
      {images &&
        images.map((image) => {
          return <p key={image.id}>{image.description}</p>
        })}
      {/* <h1>{images?.country_name}</h1>
      <p>Description: {images?.description}</p> */}
    </div>
  )
}

export default Images
