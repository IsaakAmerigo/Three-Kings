import { Router } from 'express'
import * as controllers from '../controllers/books.js'

const router = Router()

router.get('/books', controllers.getBooks)
router.get('/books/:id', controllers.getBook)
router.post('/books', controllers.createBook)
router.put('/books/:id', controllers.updateBook)
router.delete('/books/:id', controllers.deleteBook)

export default router