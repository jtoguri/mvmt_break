import './Header.css';

function Header ({ session }) {
  
  return (
    <header>
      <nav>
        <a href="/"><h1>MVMT Break</h1></a>
        <ul>
          <li><a href="about">About</a></li>
          <li><a href="register">Sign Up</a></li>
          <li>{!session ? <a href="login">Sign In</a> : <a
            href="logout">Sign Out</a>}</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
