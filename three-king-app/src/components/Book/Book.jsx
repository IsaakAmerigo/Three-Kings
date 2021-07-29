import './Book.css'
import { Link } from 'react-router-dom' 

const Book = (props) => {
  return (
<div className="parent">

  
<Link>

<div >
<img className="child" id="one" className="card-image" src={props.imgURL} alt={props.title}></img>
</div>
<div className="child" id="two"  className="card-info">
<p>{props.title}</p>
<p>{props.author}</p>
</div>

</Link>


</div>
  )
}

export default Book;