import './Book.css';
import { Link } from 'react-router-dom';

const Book = (props) => {

    return (
        <div>
            <Link className="book" to={`/books/${props._id}`}>
              <div class="bookclose">
                <div className="book-title">{props.title}</div>
                <div className="book-author">{props.author}</div>
                </div>
                <div>
                <img className="book-image" src={props.imgURL} alt={props.title} />
                </div>
            </Link>
        </div>
    )
}

export default Book