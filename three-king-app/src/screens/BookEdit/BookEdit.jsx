// import './BookEdit.css'
// import { useState, useEffect } from 'react'
// import { useParams, Redirect } from 'react-router-dom'
// import Layout from '../../components/Layout/Layout'
// import { getBooks, updateBook } from '../../services/books'

// const BookEdit = (props) => {
//   const [book, setBook] = useState({
//     title: '',
//     author: '',
//     genre: '',
//     imgURL: '',
//     description: '',
//   })

//   const [isUpdated, setUpdated] = useState(false)
//   let {id} = useParams()

//   useEffect(() => {
//     const fetchBook = async () => {
//       const book = await getBook(id)
//       setBook(book)
//     }
//     fetchBook()
//   }, [id])

//   const handleChange = (event) => {
//     const { name, value } = event.target
//     setBook({
//       ...book,
//       [name]: value,
//     })
//   }

//   const handleSubmit = async (event) => {
//     event.preventDefault()
//     const updated = await updateBook(id, book)
//     setUpdated(updated)
//   }

//   if (isUpdated) {
//     return <Redirect to={`/books/${id}`} />
//   }

//   return(
//     <Layout>
//       <div className="book-edit" >
// <form className="edit-form" onSubmit={handleSubmit}>
//   <input
//   className="input-title"
//     placeholder='Title'
//       value={book.title}
//         name='title' required autoFocus
//           onChange={handleChange}
//           />

// <input
// className='input-author'
//   placeholder='Author'
//     value={book.author}
//       name='author' required
//         onChange={handleChange}
//           />

// <input
// className='input-genre'
//   placeholder='Genre'
//     value={book.genre}
//       name='genre' required
//         onChange={handleChange}
//           />

// <div className="image-container">

// <img className="edit-book-image" 
// src={book.imgURL} 
// alt={book.title} />

// <form onSubmit={handleSubmit}>
// <input
// className='edit-input-image-link'
//   placeholder='Image Link'
//     value={book.imgURL}
//       name='imgURL' required
//         onChange={handleChange}
//             />
// </form>

// <textarea
// className='textarea-description'
//   rows={10}
//     cols={78}
//       placeholder='Description'
//         value={book.description}
//           name='description' required
//             onChange={handleChange}
//           />

//           <button type='submit' className='save-button'>
//             Save
//           </button>
// </div>
// </form>



//       </div>
//     </Layout>
//   )
// }

// export default BookEdit;