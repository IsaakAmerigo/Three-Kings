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
  <div>
    <img className="" ></img>
  </div>
</Layout>
    )
}

export default BookDetail;