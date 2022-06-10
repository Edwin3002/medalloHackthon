import React, { useEffect, useState } from 'react'
import { Table, Nav, Modal, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { menu } from '../data/menu'
import { agregarPedido } from '../redux/reducers/pedidosReducer'
import Swal from "sweetalert2"
import '../style/menu.css'
import { useNavigate } from 'react-router-dom'


export const Menu = () => {
  const [menuFood, setMenuFood] = useState(menu);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [producto, setProducto] = useState({
    id: "",
    nombre: "",
    descripcion: "",
    img: "",
    precio: "",
    cantidad: "",
    categoria: "",
  });
  const detalle = (foot) => {
    setShow(true)
    setProducto(foot);
  }

  const filterFood = (filt) => {
    setMenuFood(menu.filter((menuFilter) => menuFilter.categoria === filt))
  }
  const add = (f) => {
    dispatch(agregarPedido(f))
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Producto agregado',
      showConfirmButton: false,
      timer: 1500
    })
  }
  const pay = (f) => {
    dispatch(agregarPedido(f))
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Producto agregado',
      showConfirmButton: false,
      timer: 1000
    })
    setTimeout(() => {
      navigate('/pago')
    }, 1000);
  }
  return (
    <div className='mt-5 pt-2' >
      <div className='divFix'>

        <Nav variant="tabs" className=' bg-warning text-light filterNav'>
          <Nav.Item>
            <Nav.Link className='' onClick={() => { setMenuFood(menu) }}>
              Todos
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => { filterFood('Lácteos') }}>
              Lácteos
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => { filterFood('Carnes') }}>
              Carnes
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => { filterFood('Frutas y Verduras') }}>
              Frutas y Verduras
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => { filterFood('Panaderia') }}>
              Panaderia
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <Table className='w-75 mx-auto my-5' striped bordered hover variant="success">
        <thead>
          <tr className='text-center'>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {
            menuFood.map((food) => (
              <tr key={food.id} className='text-center'>
                <td><div className='imgFood'><img className='imgF' src={food.img} alt={food.nombre}
                  onClick={() => detalle(food)}
                /></div></td>
                <td className='w-50'>{food.nombre}</td>
                <td className='w-25'>$ {food.precio}</td>
                <td className='w-25'> <p className='add' onClick={() => add(food)}>Agregar</p><p className='pay' onClick={() => pay(food)}>pagar</p></td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {producto.nombre}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="sub_container">
            <div className="container_right">
              <img className="img__modal" src={producto.img} alt={producto.name}/>
            </div>
            <div className="container_left">
              <p>{producto.descripcion}</p>
              <small>{"$" + producto.precio}</small>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}
