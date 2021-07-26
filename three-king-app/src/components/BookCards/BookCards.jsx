
import { useState, useEffect } from 'react'
import './BookCards.css'
import BookCard from '../BookCard/BookCard'
import { getBooks } from '../../services/books'

const BookCards = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchBooks = async () => {
      const allBooks = await getBooks()
      setBooks(allBooks)
    }
    fetchBooks()
  }, [])

  const CARDS = books

    .map((book, index) =>
      index < 8 ? (
        <BookCard
        
          title={book.title}
          author={book.author}
          imgURL={book.imgURL}
          key={index}
        />
      ) : null
    )

  return (
    <div className='book-cards'>
      
      <div className='cards'>{CARDS}</div>
    </div>
  )
}

export default BookCards