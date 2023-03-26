import connection from './connection'
import { ImageDetails } from '../../common/Images'

export function getAllPosts(db = connection): Promise<ImageDetails[]> {
  return db('ImageDetails').select('*', 'country_name AS countryName')
}
