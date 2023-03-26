import { useState } from 'react'

import { ImageDetails } from '../../common/Images'
import { getImages } from '../api/images'

function Images() {
  const [imagesObj, setImageObj] = useState(null as ImageDetails | null)

  const clickHandler = () => {
    return getImages()
      .then((obj) => {
      setImageObj(obj)
      })
      .catch((err) => console.log(err.message))
  }

  return (
    <>
      <div className="flex">
        <h1>Hello and Welcome</h1>
        <button className="button" onClick={clickHandler}>
          Click here to find out :){' '}
        </button>
        {imagesObj && (
          <div>
            <p>Latitude: {imagesObj?.country_name}</p>
            <p>Longitude: {imagesObj?.description}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default Images
