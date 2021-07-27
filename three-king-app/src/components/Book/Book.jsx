import './Book.css'
import { Link } from 'react-router-dom' 

const Book = (props) => {
  return (
<div className="card">
<Link>
<div>
<img className="card-image" src={props.imgURL} alt={props.title}></img>
</div>
<div className="card-info">
<p>{props.title}</p>
<p>{props.author}</p>
</div>

</Link>
</div>
  )
}

export default Book;