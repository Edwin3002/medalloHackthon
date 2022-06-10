import React, { useState } from 'react'
import { Table, Nav } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { menu } from '../data/menu'
import { agregarPedido } from '../redux/reducers/pedidosReducer'
import Swal from "sweetalert2"
import '../style/menu.css'

export const Menu = () => {
  const [menuFood, setMenuFood] = useState(menu);
  const dispatch = useDispatch();

  const filterFood = (filt) => {
    setMenuFood(menu.filter((menuFilter) => menuFilter.categoria === filt))
  }
  const add = (f) =>{
    dispatch(agregarPedido(f))
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Producto agregado',
      showConfirmButton: false,
      timer: 1500
    })
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
                <td><div className='imgFood'><img className='imgF' src={food.img} alt={food.nombre} /></div></td>
                <td className='w-50'>{food.nombre}</td>
                <td className='w-25'>$ {food.precio}</td>
                <td className='w-25'> <p className='add' onClick={()=> add(food)}>Agregar</p></td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  )
}
