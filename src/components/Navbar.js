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
            <Nav.Link href="">Miel Pur</Nav.Link>
            <Nav.Link href="#link">Miel aux Fruits Sec</Nav.Link>
            <Nav.Link href="#link">Mélange & Coktail</Nav.Link>
            <Nav.Link href="#link">Bssissa,Zrir&Créme</Nav.Link>
            <Nav.Link href="#link">Produit Apricoles</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    <img className="img" src="https://mielboumiza.com/static/version1731065267/frontend/FJ/boumiza/fr_FR/images/logo.png" />
    <img  src="https://mielboumiza.com/media/wysiwyg/produits_web_.png" />
      </div>
    );
  }
  
  export default CustomNavbar;