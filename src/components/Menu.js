import React, { useState } from 'react'
import { Table, Nav } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { menu } from '../data/menu'
import { agregarPedido } from '../redux/reducers/pedidosReducer'
import '../style/menu.css'

export const Menu = () => {
  const [menuFood, setMenuFood] = useState(menu);
  const dispatch = useDispatch();

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
            <Nav.Link onClick={() => { filterFood('bebidas') }}>
              Bebidas
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => { filterFood('carnes') }}>
              Carne
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => { filterFood('postres') }}>
              Postres
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => { filterFood('comidas_rapidas') }}>
              Comidas Rapidas
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
                <td className='w-25'> <p className='add' onClick={()=> dispatch(agregarPedido(food))}>Agregar</p></td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  )
}
