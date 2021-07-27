import './Nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {
  return(
<div id="head">
  <Link id="link" className="nav" to = "/"> Three Kings </Link>
  <Link id="link" to = "/books">View Library</Link>
</div>
  )
}

export default Nav;