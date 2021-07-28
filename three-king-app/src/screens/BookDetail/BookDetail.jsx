import './BookDetail.css'
import Nav from '../../components/Nav/Nav'
// {}: importing a function
import { getBook } from '../../services/books.js'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const BookDetail = () => {

const [book, setBook] = useState(null)
const {id} = useParams()

useEffect(() => {
  const fetchBook = async () => {
    const getBook = await getBook(id)
    setBook(book)
  }
fetchBook()
}, [id])

  return(
<Layout>
  <div className="book-info">
<img className="book-image" src={book.imgURL} alt={book.title} />
  </div>
  <div className="title">
{book.title}
  </div>
  <div className="author">
  {book.author}
  </div>
  <div className="genre">
  {book.genre}
  </div>
  <div className="description">
  {book.description}
  </div>
  <div className="button-container">

  <button className="edit-button">
    <Link className="edit-link" to={`/books/${book._id}/edit`}>Edit</Link></button>

  <button className="delete-button" onClick={() => deleteBook(book._id)}>Delete</button>

  </div>
</Layout>
    )
}

export default BookDetail;