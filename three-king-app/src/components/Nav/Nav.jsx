import './Nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {
  return(
<div>
  <Link to = "/"> Three Kings </Link>
  <Link to = "/books">View Library</Link>
</div>
  )
}

export default Nav;