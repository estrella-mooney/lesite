import request from 'superagent'
import { ImageDetails } from '../../common/Images'

const imagesURL = '/api/v1/images/'

export function getImages(): Promise<ImageDetails[]> {
  return request
    .get(imagesURL)
    .then((images) => images.body)
    .catch((err) => {
      console.log(err.message)
    })
}
