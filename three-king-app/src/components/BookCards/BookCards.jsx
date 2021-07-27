import { useState, useEffect } from "react"
import "./BookCards.css"
import Book from '../Book/Book'
import { getBooks } from "../../services/books"

const BookCards = () => {

  const [books, setBooks] = useState([])
// create useEffect, function: fetchBooks(to get all books from getBooks api call done in service/books.js)
  useEffect(() => {
    const fetchBooks = async () => {
      const allBooks = await getBooks()
      setBooks(allBooks)
    }
    fetchBooks()
  }, [])

  // map out book list to put each in individual cards
  const cards = books.map((book, index) => (
  <Book 
  imgURL = {book.imgURL}
  title = {book.title}
  author = {book.author}
  key = {index}
  />
  ))

  return (
<div>
<div>
{cards}
<h1>book cards</h1>
</div>
</div>
  )

}


export default BookCards