import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const {user, logOut} = useAuth();
    return (
<Navbar variant="dark"  expand="lg" bg="primary">
<Container>
<Navbar.Brand as={Link} to="/"> <span style={{color:'yellow'}}>SIMBA</span> STORE</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">

   
    <Nav className="ms-auto">
      <Nav.Link style={{color:'#DFFF00', fontWeight:'600'}}  as={Link} to="/">Home</Nav.Link>
      <Nav.Link style={{color:'#DFFF00', fontWeight:'600'}}  as={Link} to="/products">Products</Nav.Link>

      <Nav.Link style={{color:'#DFFF00', fontWeight:'600'}}  as ={NavLink} to="/aboutus" >About Us</Nav.Link>
      {
          user?.email && <Nav.Link style={{color:'#DFFF00', fontWeight:'600'}}  as ={NavLink} to="/mainboard" >Dashboard</Nav.Link>
      }
      {
          user?.email ? 
          <Button onClick={logOut} className="btn btn-danger"  >LogOut </Button>
          :
          <Button className="btn btn-warning" as ={NavLink} to="/login">Login</Button>
      }
    </Nav>

</Navbar.Collapse>
</Container>
</Navbar>

    );
};

export default Navigation;