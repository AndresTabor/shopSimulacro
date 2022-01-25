import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavStyled } from '../styles/Styles';

const Navbarr = () => {
  return <NavStyled>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Shop App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className='mx-5'>Home</Link> 
              <Link to="/formulario" className='mx-5'>Registrar Producto</Link>                        
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  </NavStyled>;
};

export default Navbarr;
