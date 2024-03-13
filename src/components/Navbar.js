import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1><Link to="/">My Portfolio</Link></h1>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;