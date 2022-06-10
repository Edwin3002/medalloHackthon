import React, { useEffect, useState } from 'react'
import { Table, Nav,  Modal, Button  } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { menu } from '../data/menu'
import { agregarPedido } from '../redux/reducers/pedidosReducer'
import '../style/menu.css'


export const Menu = () => {
  const [menuFood, setMenuFood] = useState(menu);
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
                <td className='w-25'> <p className='add' onClick={()=> dispatch(agregarPedido(food))}>Agregar</p></td>
              </tr>
            ))}
        </tbody>
      </Table>

      {/* <Button variant="primary" onClick={() => setShow(true)}>
      Custom Width Modal
    </Button> */}
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
           <img className="img__modal" src={producto.img} />
        </div>
         <div className="container_left">
           <p>{producto.descripcion}</p>
           <small>{` $ ${producto.precio}`}</small>
          <small>{producto.cantidad}</small>
         </div>
       </div>
      </Modal.Body>
    </Modal>
    </div>
  )
}
