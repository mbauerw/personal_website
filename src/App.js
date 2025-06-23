import logo from './logo.svg';
import './App.css';

function NavBar() {
  return (
    <nav className='nav-bar'>
    <ul className='nav-list'>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Portfolio</a></li>
      <li><a href="#">Music</a></li>
    </ul>
  </nav>
  )
}

function App() {
  return (
    <div className="header-wrap">
      <div className="header-wrap-inner">
        <NavBar></NavBar>
      </div>
    </div>
  ) 
    
  
}

export default App;
