import "./navbar.css"
import {Link} from "react-router-dom";
const Navbar =() =>{
    return(
        <ul>
            <li >
                <Link  to="/">Home</Link>
            </li>
            <li >
                <Link  to="/About">About</Link>
            </li>
            <li >
                <Link to="/Contact">Contact</Link>
            </li>
            <li >
                <Link to="/Portfolio">Portfolio</Link>
            </li>
            <li >
                <Link  to="/Email">Email</Link>
            </li>
        </ul>
    )

}
export  default Navbar;