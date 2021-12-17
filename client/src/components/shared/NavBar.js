import { Link } from 'react-router-dom';

const Navbar = ({}) => {
  return (
    <>
      <nav>
        <ul>
          <Link to='/home'>
            <li>Home</li>
          </Link>
          <br/>
          <Link to='/about'>
            <li>About</li>
          </Link>
          <br/>
          <Link to='/workers'>
            <li>Workers</li>
          </Link>
          <br/>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;