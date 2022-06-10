import {
    addDoc, collection, deleteDoc, doc, getDocs,
    query, updateDoc, where,
} from 'firebase/firestore';
import { getDataFire } from '../../firebase/ConfigFireBase';

//paint pedidos

export const paintPedidosAsync = () => {
    return async (dispatch) => {
        const getDataPedidos = await getDocs(
            collection(getDataFire, 'pedidos')
        );
        const pedidos = [];
        console.log(getDataPedidos)
        console.log(getDataPedidos.data)
        getDataPedidos.forEach((carr) => {
            pedidos.push({
                ...carr.data(),
            });
        });
        console.log(pedidos)
    };
};