import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  try {
    res.json({ statement: 'Welcome to LE Site!' })
  } catch (err) {
    res.status(500).send(err != null && (err as Error).message)
  }
})

export default router
