import './Books.css'
import getBooks from '../../services/books'
import BookCards from '../../components/BookCards/BookCards'
import { useEffect } from 'react'

const Books = () => {
useEffect(() => {
  const fetchBooks = async () => {
    const allBooks = await getBooks()

}
fetchBooks()
}, [])

  return(
<div>
<BookCards />
<h1> Library page </h1>
</div>
  )

}


export default Books;