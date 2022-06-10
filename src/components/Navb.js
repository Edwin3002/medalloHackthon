import { Link } from 'react-router-dom'
import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import '../style/navbar.css'
export const Navb = () => {
  return (
    // <Navbar fixed="top" className='navbar text-light' expand="lg">
    //   <Container>
    //     <Navbar.Brand href="#home" className='link'>Parrilla Campestre</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">

    //         <Link to='/' className='m-1'><Button  variant="outline-primary">Home</Button></Link>
    //         <Link to='/menu' className='m-1'><Button variant="outline-primary"> Menu</Button></Link>
    //         <Link to='/pedidos' className='m-1'><Button variant="outline-primary"> Pedidos</Button></Link>

    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <Navbar fixed="top" className='navbar text-light' variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Link to='/' className='m-1'><Button variant="outline-primary">Home</Button></Link>
          <Link to='/menu' className='m-1'><Button variant="outline-primary"> Menu</Button></Link>
          <Link to='/pedidos' className='m-1'><Button variant="outline-primary"> Pedidos</Button></Link>

        </Nav>
      </Container>
    </Navbar>
  )
}
