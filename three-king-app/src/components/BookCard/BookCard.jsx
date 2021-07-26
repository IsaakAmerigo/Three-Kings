import './BookCard.css';
import { Link } from 'react-router-dom'

const BookCard = (props) => {

    return (
        <div className="book-card">
            <Link className="card" to={`/books/${props._id}`}>
            <div className="title">{props.title}</div>
            
                    <div className="author">{`$${props.author}`}</div>

                <img className="book-card-image" src={props.imgURL} alt={props.name} />

                <div>View</div>
            </Link>
        </div>
    )
    
}

export default BookCard
