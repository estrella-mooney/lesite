import { useState, useEffect } from 'react'
import { ImageDetails } from '../../common/Images'
// import { getImages } from '../api/apiImages'

interface Props {
  imageProp: ImageDetails
}

function Images(props: Props) {
  const { description, country_name } = props.imageProp
  return (
    <div className="widget-container">
      <h1>{country_name}</h1>
      <p>Price: {description}</p>
    </div>
  )
}
export default Images
