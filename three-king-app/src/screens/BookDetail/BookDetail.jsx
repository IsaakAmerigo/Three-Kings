import { useState, useEffect } from 'react'
import './BookDetail.css'
import Layout from '../../components/Layout/Layout'
import { getBook, deleteBook } from '../../services/books'
import { useParams, Link } from 'react-router-dom'

const BookDetail = (props) => {

    const [book, setBook] = useState(null)
    const [isLoaded, setLoaded] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        const fetchBook = async () => {
            const book = await getBook(id)
            setBook(book)
            setLoaded(true)
        }
        fetchBook()
    }, [id])

    if (!isLoaded) {
        return <h1>Loading...</h1>
    }

    return (
        <Layout>
            <div className="book-detail">
                <img className="book-detail-image" src={book.imgURL} alt={book.title} />
                <div className="detail">
                    <div className="title">{book.title}</div>
                    <div className="author">{`${book.author}`}</div>
                    <div className="path">{book.path}</div>
                    <div className="imgURL">{book.imgURL}</div>
                    <div className="description">{book.description}</div>
                    <div className="button-container">
                        <button className="edit-button"><Link className="edit-link" to={`/books/${book._id}/edit`}>Edit</Link></button>
                        <button className="delete-button" onClick={() => deleteBook(book._id)}>Delete</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default BookDetail