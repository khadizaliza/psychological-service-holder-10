
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import doctor5 from '../../../image/doctor5.jpg'

const Header = () => {
    return (
        <header>
          <>
  
          <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark" class="navbar navbar-expand-sm sticky-top navbar-light bg-light">
  <Container>
  <Navbar.Brand as={Link} to="/">
    <img src={doctor5} height="50px" alt="" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="home#services">Services</Nav.Link>
      
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="about">About</Nav.Link>
      <Nav.Link as={Link} to="blog">Blog</Nav.Link>
      <Nav.Link as={Link} to="login">
        Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

 
</>
        </header>
    );
};

export default Header;













