import { useState, useEffect } from 'react'
import { ImageDetails } from '../../common/Images'
import { getImages } from '../api/apiImages'

function Images() {
  const [imagesObj, setImagesObj] = useState<ImageDetails[]>([])
  }, [])

  return (
    <>
      <div className="flex">
        <h1>Hello and Welcome</h1>
        {imagesObj &&
          imagesObj.map((image) => (
            <div key={image.country_name}>
              <p>Country Name: {image.country_name}</p>
              <p>Description: {image.description}</p>
            </div>
          ))}
      </div>
    </>
  )
}

export default Images
