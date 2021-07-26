import { useState, useEffect } from 'react'
import './Books.css'

import Book from '../../components/Book/Book'
import BookCards from '../../components/BookCards/BookCards'
import { AZ } from "../../utils/sort"
import Sort from '../../components/Sort/Sort'
import Layout from '../../components/Layout/Layout'
import { getBooks } from '../../services/books'

const Books = (props) => {
  const [books, setBooks] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const [applySort, setApplySort] = useState(false)
  const [sortType, setSortType] = useState('title-ascending')

  useEffect(() => {
    const fetchBooks = async () => {
      const allBooks = await getBooks()
      setBooks(allBooks)
      setSearchResult(allBooks)
    }
    fetchBooks()
  }, [])

  const handleSort = (type) => {
    if (type !== '' && type !== undefined) {
      setSortType(type)
    }
    switch (type) {
      case 'title-ascending':
        setSearchResult(AZ(searchResult))
        break
        defualt: 
        break
    }
  }

  if (applySort) {
    handleSort(sortType)
    setApplySort(false)
  }

  const handleSearch = (event) => {
    const results = books.filter((book) =>
      book.name.toLowerCase().includes(event.target.value.toLowerCase())
    )
    setSearchResult(results)
    setApplySort(true)
  }

  const handleSubmit = (event) => event.preventDefault()

  return (
    <Layout>
      {/* <Search onSubmit={handleSubmit} handleSearch={handleSearch} />  */}
      <Sort onSubmit={handleSubmit} handleSort={handleSort} />
      <div className='books'>
        {searchResult.map((book, index) => {

          return (
            <Book
              // _id={book._id}
              title={book.title}
              author={book.author}
              imgURL={book.imgURL}
              key={index}
            />
          )
          
        })}
      </div>
      <div>
        <h1>books page</h1>

        <BookCards books={books}/>
      </div>
    </Layout>
  )
}

export default Books