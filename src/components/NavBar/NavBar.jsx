// REACT
import {Link} from 'react-router-dom'

// CSS
import './NavBar.css'

// BOOTSTRAP
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Xustans S.A.</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/Xustans'>Inicio</Nav.Link>
            <Nav.Link as={Link} to='/Xustans/Ubicacion'>Ubicacion</Nav.Link>
            <Nav.Link as={Link} to='/Xustans/Contactenos'>Contactenos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar