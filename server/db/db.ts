import connection from './connection'
import { ImageDetails } from '../../common/Images'

// export function getAllPosts(db = connection): Promise<ImageDetails[]> {
//   return db('images').select('*', 'country_name AS countryName')
// }

export function getAllImages(db = connection): Promise<ImageDetails[]> {
  return db('images').select('*', 'countryName AS country_name')
}
