import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import '../style/menu.css'
import { ArrowLeft, ArrowRight } from '../icons/icons'
import { aumentarPedido, disminuirPedido, removerPedido, vaciarPedido } from '../redux/reducers/pedidosReducer'
import { addPedidosAsync } from '../redux/actions/actionsPedidos'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

export const ListaPedido = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { pedidosItems, cantidad, total } = useSelector((store) => store.pedidos)

    const pagar = () => {
        navigate('/pago')
        // dispatch(addPedidosAsync({ pedidosItems }))

        // setTimeout(() => {
        //     dispatch(vaciarPedido())
        // }, 2000);
    }
    const cancelar = () => {
        dispatch(vaciarPedido())
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Pedido Cancelado',
            showConfirmButton: false,
            timer: 1500
        })
    }
    const remover = (id) => {
        dispatch(removerPedido(id))
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Producto Removido',
            showConfirmButton: false,
            timer: 1500
        })
    }
    if (cantidad < 1) {
        return (<div>
            <h2>Your back</h2>
            <h4>vacia</h4>
        </div>
        )
    }
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
                                        <div className='remove' onClick={() => remover(id)}>Remover</div>
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
            <div className='d-flex justify-content-between'>
                <Button variant='danger' className='my-2' onClick={() => { cancelar() }}>Cancelar pedido</Button>
                <Button variant='success' className='my-2' onClick={() => { pagar() }}>Pagar pedido</Button>
            </div>
        </div>

    )
}
