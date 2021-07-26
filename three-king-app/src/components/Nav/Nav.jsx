import './Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {

    return (
        <nav>

            <div id="head" className="nav">
                <NavLink className="link" to="/">Three Kings</NavLink>
                <div id="head" className="links">
                    <NavLink className="link" to="/books">View Library</NavLink>
                    <NavLink className="link" to="/add-book">Add Book</NavLink>
                </div>
            </div>

        </nav>
    )

}

export default Nav