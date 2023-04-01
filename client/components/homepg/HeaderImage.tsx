import { useState, useEffect } from 'react'
import { ImageDetails } from '../../../common/Images'
import { getAllImages } from '../../api/apiClient'

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
          return (
            <div key={image.id}>
              <p>{image.description}</p>
              <p>{image.country_name}</p>
              <img
                className="imageSize"
                src={image.path}
                alt="Mountain and lakes"
              />
            </div>
          )
        })}
    </div>
  )
}

export default Images
