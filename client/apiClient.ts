import request from 'superagent'
import { ImageDetails } from '../common/Images'

// const imagesURL = '/api/v1/images/'

export function getGreeting(): Promise<string> {
  return request.get('/greeting').then((res) => res.body.greeting)
}

// export function getImages(): Promise<ImageDetails[]> {
//   return request.get(imagesURL).then((images) => images.body)
// }
