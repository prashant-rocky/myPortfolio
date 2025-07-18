import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/react.svg';
import '../../assets/style.css'


function Header() {
  const scroll = (e) => {
    window.scrollTo(0, 0);
  };

  return (
    <header className='mainMenu position-sticky top-0'>

      <Navbar expand="lg" className="bg-body-tertiary ">
        <Container>
          <Navbar.Brand href="/"><img src={Logo} alt="error" className='img-fluid' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav><Link to={'/'} className='mx-4 text-decoration-none text-black' onClick={scroll}>Home</Link></Nav>
              <Nav><NavLink to={'About'} className='mx-4 text-decoration-none text-black' onClick={scroll}>About</NavLink></Nav>
              <Nav><NavLink to={'portfolio'} className='mx-4 text-decoration-none text-black' onClick={scroll}>Portfolio</NavLink></Nav>
              <Nav><NavLink to={'blogs'} className='mx-4 text-decoration-none text-black' onClick={scroll}>Blogs</NavLink></Nav>
              <Nav><NavLink to={'Contact'} className='mx-4 text-decoration-none text-black' onClick={scroll}>Contact</NavLink></Nav>
              <Nav>
                <NavLink
                  // to={'dashboard'}
                  className='mx-4 text-decoration-none text-black'
                >Dashboard</NavLink>
              </Nav>
            </Nav>
            <button className='border-0'><Link to={'/contact'} className='mybtn text-decoration-none'>Hire me</Link></button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;