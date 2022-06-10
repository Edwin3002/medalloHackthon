import { Link } from 'react-router-dom'
import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import '../style/navbar.css'
import { useSelector } from 'react-redux';
export const Navb = () => {
const {cantidad} = useSelector((store)=>  store.pedidos)

  return (
    <Navbar fixed="top" className='navbar text-light' variant="dark">
      <Container>
        <Navbar.Brand href="#home">Mi plazita</Navbar.Brand>
        <Nav className="me-auto">
          <Link to='/' className='m-1'><Button variant="outline-primary">Home</Button></Link>
          <Link to='/menu' className='m-1'><Button variant="outline-primary"> Menu</Button></Link>
        </Nav>
        <Link to='/pedidos' className='m-1'>
          <img width=' 25px' src='https://res.cloudinary.com/edwin3002/image/upload/v1654882739/medallo/cart-removebg-preview_wifet5.png' alt='cart' />
          <span className='mx-1'>{cantidad}</span>
          </Link>
      </Container>
    </Navbar>
  )
};
