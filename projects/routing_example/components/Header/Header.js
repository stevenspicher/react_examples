import { Link } from 'react-router-dom';

function Header() {
   return (
    <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/index'>Index</Link></li>
    
      </ul>
    </nav>
  </header>

    )
}

export default Header