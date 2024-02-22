import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown.Item>
              <Link to="/">Home</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/all-users">All users</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/random-users">Random user</Link>
            </NavDropdown.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
