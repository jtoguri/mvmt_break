import './Header.css';

function Header () {
  
  return (
    <header>
      <nav>
        <a href="/"><h1>MVMT Break</h1></a>
        <ul>
          <li><a href="about">About</a></li>
          <li><a href="register">Sign Up</a></li>
          <li><a href="login">Sign In</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
