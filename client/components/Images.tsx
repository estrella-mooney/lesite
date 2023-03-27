import { useState, useEffect } from 'react'
import { ImageDetails } from '../../common/Images'
import { getAllImages } from '../api/apiClient'

function Images() {
  const [images, setImages] = useState<ImageDetails[]>([])

  useEffect(() => {
    getAllImages()
      .then((imageArr) => {
        setImages(imageArr)
      })
      .catch((err) => alert(err.message))
  }, [])

  return (
    <div>
      {images.map((image) => (
        <div key={image.id} className="widget-container">
          <h1>{image.country_name}</h1>
          <p>Description: {image.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Images

// import { useState, useEffect } from 'react'
// import { ImageDetails } from '../../common/Images'
// import { getAllImages } from '../api/apiClient'
// import * as Models from '../../common/Images'

// export function Images(image: ImageDetails) {
//   // const { description, country_name } = props.imageProp

//   const [images, setImages] = useState<ImageDetails[]>([])

//   useEffect(() => {
//     getAllImages()
//       .then((imageArr) => {
//         setImages(imageArr)
//       })
//       .catch((err) => alert(err.message))
//   }, [])

//   return (
//     <div>
//       {images.map((image) => (
//         <div key={image.id} className="widget-container">
//           <h1>{image.country_name}</h1>
//           <p>Description: {image.description}</p>
//         </div>
//       ))}
//     </div>
//   )
// }
// export default Images
