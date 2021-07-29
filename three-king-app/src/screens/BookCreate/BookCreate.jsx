import './BookCreate.css'
import { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { Redirect } from 'react-router-dom'
import { createBook } from '../../services/books'


const BookCreate = (props) => {

  const [book, setBook] = useState({
    title: '',
    author: '',
    genre: '',
    imgURL: '',
    description: '',
  })

  const [isCreated, setCreated] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target
        setBook({
                ...book,
                [name]: value
        })
    }

    const handleSubmit = async (event) => {
      event.preventDefault()
      const created = await createBook(book)
      setCreated({ created })
  }

  if (isCreated) {
    return <Redirect to={`/books`} />
}

return (
  <Layout>
<form className="create-form" onSubmit={handleSubmit}>
  <input
    className="input-title"
      placeholder='Title'
        value={book.title}
          name='title' required autoFocus
            onChange={handleChange}
                />

<input
    className="input-author"
      placeholder='Author'
        value={book.author}
          name='author' required autoFocus
            onChange={handleChange}
                />

<input
    className="input-genre"
      placeholder='Genre'
        value={book.genre}
          name='genre' required autoFocus
            onChange={handleChange}
                />

<input
  className="input-image-link"
    placeholder='Image Link'
      value={book.imgURL}
        name='imgURL' required
          onChange={handleChange}
                />

<textarea
  className="textarea-description"
    rows={10}
      placeholder='Description'
        value={book.description}
          name='description' required
            onChange={handleChange}
                />

<button type='submit' 
className="submit-button">
  Submit
  </button>

</form>
  </Layout>
)
}

export default BookCreate;