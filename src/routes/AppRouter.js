import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../components/Home'
import { Menu } from '../components/Menu'
import { Navb } from '../components/Navb'
import { Pedidos } from '../components/Pedidos'
import { totalPedido } from '../redux/reducers/pedidosReducer'

export function AppRoutes() {
	const { pedidosItems, isLoading } = useSelector((store) => store.pedidos)
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(totalPedido());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pedidosItems]);
	// if (isLoading) {
	// 	return (
	// 		<div>
	// 			<h1>Loading...</h1>
	// 		</div>
	// 	)
	// }
	return (
		<BrowserRouter>
			<Navb />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/menu' element={<Menu />} />
				<Route path='/pedidos' element={<Pedidos />} />
			</Routes>
		</BrowserRouter>
	)
}
