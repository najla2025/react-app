import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function CustomNavbar() { 
    return (
      <div className="nav">
      
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="">A Propos de la FIFA</Nav.Link>
            <Nav.Link href="#link">Congrés de la FIFA</Nav.Link>
            <Nav.Link href="#link">FIFA Médical</Nav.Link>
            <Nav.Link href="#link">Football Professionnel</Nav.Link>
            <Nav.Link href="#link">Président</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    <img className="background-container" src="https://i.pinimg.com/736x/a8/68/5f/a8685f690b56e04b64a22e49257a33f4.jpg" alt='' />
      </div>
    );
  }
  
  export default CustomNavbar;