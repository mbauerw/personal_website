import { Link } from "react-router-dom"

function NavBar() {
    return (
      <nav className='nav-bar'>
        <ul className='nav-list'>
          <Link to="/" className = "nav-link">Home</Link>
          <Link to="/about" className = "nav-link">About</Link>
          <Link to="/portfolio" className = "nav-link">Portfolio</Link>
        </ul>
      </nav>
    )
  }
  
  export default NavBar;