import express from 'express'
import { getAllImages } from '../db/db'

const router = express.Router()

router.get('/', (req, res) => {
  getAllImages()
    .then((images) => {
      res.json(images)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

export default router
