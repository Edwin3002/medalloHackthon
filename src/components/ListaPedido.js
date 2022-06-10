import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import '../style/menu.css'
import { ArrowLeft, ArrowRight } from '../icons/icons'
import { aumentarPedido, disminuirPedido, removerPedido, vaciarPedido } from '../redux/reducers/pedidosReducer'
import { useEffect } from 'react'
import { paintPedidosAsync } from '../redux/actions/actionsPedidos'

export const ListaPedido = () => {
    const dispatch = useDispatch()
    const { pedidosItems, cantidad, total } = useSelector((store) => store.pedidos)
    useEffect(() => {
        dispatch(paintPedidosAsync())
    }, [])


    if (cantidad < 1) {
        return (<div>
            <h2>Your back</h2>
            <h4>vacia</h4>
        </div>
        )
    }

    
    // https://static.vecteezy.com/system/resources/previews/003/247/836/large_2x/grill-menu-with-delicious-food-in-wooden-background-vector.jpg
    return (
        <div>

            <Table className=' ' striped bordered hover variant="secondary">
                <thead>
                    <tr className='text-center'>
                        <th>Pedidos</th>
                    </tr>
                </thead>
                <tbody className=' w-100'>
                    {
                        pedidosItems.map((food) => {
                            const { id, nombre, precio, img, cantidad } = food
                            return (
                                <tr className='bg-info d-flex text-center' key={id}>
                                    <td className='w-50'><div className='imgFoodP w-50'><img className='imgF' src={img} alt={nombre} /></div></td>
                                    <td className='w-25'>
                                        <div>${precio}</div>
                                        <div className='remove' onClick={()=>dispatch(removerPedido(id))}>Remover</div>
                                    </td>
                                    <td className='w-25'>
                                        <span onClick={() => {
                                            if (cantidad === 1) {
                                                dispatch(removerPedido(id));
                                                return
                                            }
                                            dispatch(disminuirPedido({ id }))
                                        }}><ArrowLeft /></span>
                                        <span className='mx-3'>{cantidad}</span>
                                        <span onClick={() => dispatch(aumentarPedido({ id }))}><ArrowRight /></span>
                                    </td>
                                </tr>
                            )
                        })}
                </tbody>
                <tfoot>
                    <tr>
                        <td className='bg-info d-flex justify-content-around'>
                            <span>
                            Total:{total}
                            </span>
                            <span>
                                Cantidad: {cantidad}
                            </span>
                        </td>
                    </tr>
                </tfoot>
            </Table>
            <Button variant='danger' className='my-2' onClick={() => { dispatch(vaciarPedido()) }}>Cancelar pedido</Button>
        </div>

    )
}
