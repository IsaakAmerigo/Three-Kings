import express from 'express'
import logger from 'morgan'
import cors from 'cors'

const PORT = process.env.PORT || 3000;

import db from './db/connection.js'
import routes from './routes/index.js'

const app = express()

app.use(express.json())
app.use(cors())
app.use(logger('dev'))

app.use("/api", routes)

db.on('connected', () => {
  console.log('Connected to MongoDB!')
  app.listen(PORT, () =>
    console.log(`Express server application is running on port ${PORT}`)
  )
})

// app.get('/', (req, res) => res.send("This is root!"))

// app.get('/books', async (req, res) => {
//     try {
//         const books = await Book.find()
//         res.json(books)
//     } catch (error) {
//         res.status(500).json({ error: error.message })
//     }
// })

// app.get('/books/:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const book = await Book.findById(id)
//         if (!book) throw Error('Book not found')
//         res.json(book)
//     } catch (e) {
//         console.log(e)
//         res.send('Book not found!')
//     }
// })

// app.post('/books', async (req, res) => {
//     try {
//         const book = await new Book(req.body)
//         await book.save()
//         res.status(201).json(book)
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({ error: error.message })
//     }
// })

// app.put('/books/:id', async (req, res) => {
//   const { id } = req.params
//   const book = await Book.findByIdAndUpdate(id, req.body, { new: true })
//   res.status(200).json(book)
// })

// app.delete('/books/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deleted = await Book.findByIdAndDelete(id)
//         if (deleted) {
//             return res.status(200).send("Book deleted")
//         }
//         throw new Error("Post not found")
//     } catch (error) {
//         res.status(500).json({ error: error.message })
//     }
// })