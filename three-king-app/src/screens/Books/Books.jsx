import './Books.css'
import { getBooks } from '../../services/books.js'
import BookCards from '../../components/BookCards/BookCards'
import { useEffect } from 'react'
import Nav from '../../components/Nav/Nav'

const Books = () => {
useEffect(() => {
  const fetchBooks = async () => {
    const allBooks = await getBooks()

}
fetchBooks()
}, [])

  return(
<div>
  <Nav />
<BookCards />
<h1> Library page </h1>
</div>
  )

}


export default Books;