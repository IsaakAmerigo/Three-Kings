import { useState, useEffect } from 'react'
import './BookEdit.css'
import { useParams, Redirect } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import { getBook, updateBook } from '../../services/books'

const BookEdit = (props) => {
  const [book, setBook] = useState({
    name: '',
    description: '',
    imgURL: '',
    price: '',
  })

  const [isUpdated, setUpdated] = useState(false)
  let { id } = useParams()

  useEffect(() => {
    const fetchBook = async () => {
      const book = await getBook(id)
      setBook(book)
    }
    fetchBook()
  }, [id])

  const handleChange = (event) => {
    const { name, value } = event.target
    setBook({
      ...book,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const updated = await updateBook(id, book)
    setUpdated(updated)
  }

  if (isUpdated) {
    return <Redirect to={`/books/${id}`} />
  }

  return (
    <Layout>
      <div className='book-edit'>
        <div className='image-container'>
          <img
            className='edit-book-image'
            src={book.imgURL}
            alt={book.name}
          />
        </div>
        <form className='edit-form' onSubmit={handleSubmit}>
          <input
            className='input-Title'
            placeholder='Title'
            value={book.Title}
            name='title'
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className='input-author'
            placeholder='Author'
            value={book.author}
            name='author'
            required
            onChange={handleChange}
          />
        <input
          className="input-path"
          placeholder='Path'
          value={book.path}
          name='path'
          selectBoxOptions="Left-Hand-Path;Traditional Path;Right-Hand-Path"
          onChange={handleChange}
                />
          <form onChange={handleChange}>
            <input
              className='edit-input-image-link'
              placeholder='Image Link'
              value={book.imgURL}
              name='imgURL'
              required
              onChange={handleChange}
            />
          </form>
          <textarea
            className='textarea-description'
            rows={25}
            cols={78}
            placeholder='Description'
            value={book.description}
            name='description'
            required
            onChange={handleChange}
          />
          <button type='submit' className='save-button'>
            Save
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default BookEdit