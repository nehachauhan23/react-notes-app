import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

const NavbarComponent = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Link to="/">
            <Navbar.Brand>Notes App</Navbar.Brand>
        </Link>
        
        <Nav className="me-auto">
          <Nav.Link href="/new">Add New Note </Nav.Link>
     
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent