
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import doctor5 from '../../../image/doctor5.jpg'

const Header = () => {
    return (
        <header>
          <>
  
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home"><img src={doctor5} height="50px"  alt="" /></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

 
</>
        </header>
    );
};

export default Header;













