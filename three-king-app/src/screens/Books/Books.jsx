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
<h1> Welcome To The Library </h1>
<BookCards />
</div>
  )

}


export default Books;